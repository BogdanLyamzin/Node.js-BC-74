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

import { validateBody } from '../utils/validateBody.js';

import { movieAddSchema, movieUpdateSchema } from '../validation/movieSchemas.js';

import { isValidId } from '../middlewares/isValidId.js';

const moviesRouter = Router();

moviesRouter.get('/', ctrlWrapper(getMoviesController));

moviesRouter.get('/:id', isValidId, ctrlWrapper(getMovieByIdController));

moviesRouter.post('/', validateBody(movieAddSchema), ctrlWrapper(addMovieController));

moviesRouter.put('/:id', isValidId, validateBody(movieUpdateSchema), ctrlWrapper(upsertMovieByIdController));

moviesRouter.patch("/:id", isValidId, ctrlWrapper(patchMovieByIdController));

moviesRouter.delete("/:id", isValidId, ctrlWrapper(deleteMovieByIdController));

export default moviesRouter;
