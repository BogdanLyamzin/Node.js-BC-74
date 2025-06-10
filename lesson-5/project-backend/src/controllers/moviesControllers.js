import createHttpError from 'http-errors';

// import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { getMovies, getMovieById } from '../services/movies.js';

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

// export default {
//     getMoviesController: ctrlWrapper(getMoviesController),
//     getMovieByIdController: ctrlWrapper(getMovieByIdController),
// };
