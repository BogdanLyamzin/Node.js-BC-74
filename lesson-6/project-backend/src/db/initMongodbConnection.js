import mongoose from "mongoose";

import { getEnvVar } from "../utils/getEnvVar.js";

export const initMongodbConnection = async()=> {
    try {
        const user = getEnvVar("MONGODB_USER");
        const password = getEnvVar("MONGODB_PASSWORD");
        const url = getEnvVar("MONGODB_URL");
        const db = getEnvVar("MONGODB_DB");
        await mongoose.connect(`mongodb+srv://${user}:${password}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster0`);
        console.log("Succussfully connected MongoDB");
    }
    catch(error) {
        console.log(error.message);
    }
};