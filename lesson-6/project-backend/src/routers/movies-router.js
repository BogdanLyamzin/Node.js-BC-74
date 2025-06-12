import { Router } from 'express';

import {
  getMoviesController,
  getMovieByIdController,
  addMovieController,
  upsertMovieByIdController,
  patchMovieByIdController,
  deleteMovieByIdController,
} from '../controllers/moviesControllers.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));

moviesRouter.get('/:id', ctrlWrapper(getMovieByIdController));

moviesRouter.post('/', ctrlWrapper(addMovieController));

moviesRouter.put('/:id', ctrlWrapper(upsertMovieByIdController));

moviesRouter.patch("/:id", ctrlWrapper(patchMovieByIdController));

moviesRouter.delete("/:id", ctrlWrapper(deleteMovieByIdController));

export default moviesRouter;
