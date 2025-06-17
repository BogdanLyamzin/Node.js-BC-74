import createHttpError from 'http-errors';

import {
  getMovies,
  getMovieById,
  addMovie,
  updateMovieById,
  deleteMovieById,
} from '../services/movies.js';

export const getMoviesController = async (req, res) => {
  const data = await getMovies();

  res.json({
    status: 200,
    message: 'Successfully find movies',
    data,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const data = await getMovieById(id);

  if (!data) throw createHttpError(404, `Movie with id=${id} not found`);

  res.json({
    status: 200,
    message: `Successfull find movie with id=${id}`,
    data,
  });
};

export const addMovieController = async (req, res) => {
  const data = await addMovie(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully add movie',
    data,
  });
};

export const upsertMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const { isNew, data } = await updateMovieById(id, req.body, { upsert: true });

  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upsert movie',
    data,
  });
};

export const patchMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const result = await updateMovieById(id, req.body);

  if (!result) throw createHttpError(404, `Movie with id=${id} not found`);

  res.json({
    status: 200,
    message: 'Successfully patch movie',
    data: result.data,
  });
};

export const deleteMovieByIdController = async (req, res) => {
  const {id} = req.params;
  const data = await deleteMovieById(id);

  if (!data) throw createHttpError(404, `Movie with id=${id} not found`);

  // res.status(204).send();

  res.json({
    status: 200,
    message: "Successfully delete movie",
    data,
  });
};
