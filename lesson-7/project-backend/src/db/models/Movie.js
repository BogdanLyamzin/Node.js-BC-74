import {Schema, model} from "mongoose";

import {saveErrorHandler, setUpdateSettings} from "./hooks.js";

import { typeList, minReleaseYear } from "../../constants/movies-constants.js";

const movieSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    favorite: {
        type: Boolean,
        default: false,
        required: true,
    },
    type: {
        type: String,
        enum: typeList,
        default: "film",
        required: true,
    },
    releaseYear: {
        type: Number,
        min: minReleaseYear,
        required: true,
    }
}, {versionKey: false, timestamps: true});

movieSchema.post("save", saveErrorHandler);

movieSchema.pre("findOneAndUpdate", setUpdateSettings);

movieSchema.post("findOneAndUpdate", saveErrorHandler);

const MovieCollection = model("movie", movieSchema);

export default MovieCollection;