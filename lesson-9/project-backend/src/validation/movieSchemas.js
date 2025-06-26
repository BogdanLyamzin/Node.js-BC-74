import Joi from "joi";

import {typeList, minReleaseYear} from "../constants/movies-constants.js";

export const movieAddSchema = Joi.object({
    title: Joi.string().required().messages({
        "any.required": "Title must be exist",
        "string.base": "Title must be string"
    }),
    director: Joi.string().required(),
    favorite: Joi.boolean(),
    type: Joi.string().valid(...typeList),
    releaseYear: Joi.number().min(minReleaseYear).required(),
});

export const movieUpdateSchema = Joi.object({
    title: Joi.string().messages({
        "string.base": "Title must be string"
    }),
    director: Joi.string(),
    favorite: Joi.boolean(),
    type: Joi.string().valid(...typeList),
    releaseYear: Joi.number().min(minReleaseYear),
});