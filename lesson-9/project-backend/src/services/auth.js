import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import {randomBytes} from "node:crypto";

import UserCollection from "../db/models/User.js";
import SessionCollection from "../db/models/Session.js";

import { accessTokenLifetime, refreshTokenLifetime } from "../constants/auth-constants.js";

export const registerUser = async payload => {
    const {email, password} = payload;
    const user = await UserCollection.findOne({email});
    if(user) throw createHttpError(409, "Email already exist");

    const hashPassword = await bcrypt.hash(password, 10);
    
    const newUser = await UserCollection.create({...payload, password: hashPassword});

    return newUser;
};

export const loginUser = async ({email, password}) => {
    const user = await UserCollection.findOne({email});
    if(!user) throw createHttpError(401, "Email or password invalid");

    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare) throw createHttpError(401, "Email or password invalid");

    const accessToken = randomBytes(30).toString("base64");
    const refreshToken = randomBytes(30).toString("base64");

    return SessionCollection.create({
        userId: user._id,
        accessToken,
        refreshToken,
        accessTokenValidUntil: new Date() + accessTokenLifetime,
        refreshTokenValidUntil: new Date() + refreshTokenLifetime,
    });
};