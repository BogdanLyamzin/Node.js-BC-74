import createHttpError from 'http-errors';

import {
  getMovies,
  getMovie,
  addMovie,
  updateMovie,
  deleteMovie,
} from '../services/movies.js';

import { parsePaginationParams } from '../utils/parsePaginationParams.js';
import { parseSortParams } from '../utils/parseSortParams.js';
import { parseMovieFilters } from '../utils/filters/parseMovieFilters.js';

import { movieSortFields } from '../db/models/Movie.js';

export const getMoviesController = async (req, res) => {
  const {_id: userId} = req.user;
  const { page, perPage } = parsePaginationParams(req.query);
  const { sortBy, sortOrder } = parseSortParams(req.query, movieSortFields);
  const filters = parseMovieFilters(req.query);
  filters.userId = userId;
  
  const data = await getMovies({ page, perPage, sortBy, sortOrder, filters });

  res.json({
    status: 200,
    message: 'Successfully find movies',
    data,
  });
};

export const getMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {_id: userId} = req.user;
  const data = await getMovie({_id: id, userId});

  if (!data) throw createHttpError(404, `Movie with id=${id} not found`);

  res.json({
    status: 200,
    message: `Successfull find movie with id=${id}`,
    data,
  });
};

export const addMovieController = async (req, res) => {
  const {_id: userId} = req.user;
  const data = await addMovie({...req.body, userId});

  res.status(201).json({
    status: 201,
    message: 'Successfully add movie',
    data,
  });
};

export const upsertMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {_id: userId} = req.user;
  const { isNew, data } = await updateMovie({_id: id, userId}, req.body, { upsert: true });

  const status = isNew ? 201 : 200;

  res.status(status).json({
    status,
    message: 'Successfully upsert movie',
    data,
  });
};

export const patchMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {_id: userId} = req.user;
  const result = await updateMovie({_id: id, userId}, req.body);

  if (!result) throw createHttpError(404, `Movie with id=${id} not found`);

  res.json({
    status: 200,
    message: 'Successfully patch movie',
    data: result.data,
  });
};

export const deleteMovieByIdController = async (req, res) => {
  const { id } = req.params;
  const {_id: userId} = req.user;
  const data = await deleteMovie({_id: id, userId});

  if (!data) throw createHttpError(404, `Movie with id=${id} not found`);

  // res.status(204).send();

  res.json({
    status: 200,
    message: 'Successfully delete movie',
    data,
  });
};
