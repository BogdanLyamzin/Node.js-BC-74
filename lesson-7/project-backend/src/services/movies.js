import MovieCollection from "../db/models/Movie.js";

export const getMovies = ()=> MovieCollection.find();

export const getMovieById = id => MovieCollection.findById(id);

export const addMovie = payload => MovieCollection.create(payload);

export const updateMovieById = async (id, payload, options = {})=> {
    const result = await MovieCollection.findByIdAndUpdate(id, payload, {
        includeResultMetadata: true,
        ...options,
    });

    if(!result || !result.value) return null;

    const isNew = Boolean(result?.lastErrorObject?.upserted);

    return {
        isNew,
        data: result?.value
    };
};

export const deleteMovieById = id => MovieCollection.findByIdAndDelete(id);