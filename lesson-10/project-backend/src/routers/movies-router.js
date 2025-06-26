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

import {
  movieAddSchema,
  movieUpdateSchema,
} from '../validation/movieSchemas.js';

import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const moviesRouter = Router();

moviesRouter.use(authenticate);

moviesRouter.get('/', ctrlWrapper(getMoviesController));

moviesRouter.get('/:id', isValidId, ctrlWrapper(getMovieByIdController));

moviesRouter.post(
  '/',
  validateBody(movieAddSchema),
  ctrlWrapper(addMovieController),
);

moviesRouter.put(
  '/:id',
  isValidId,
  validateBody(movieUpdateSchema),
  ctrlWrapper(upsertMovieByIdController),
);

moviesRouter.patch(
  '/:id',
  isValidId,
  validateBody(movieUpdateSchema),
  ctrlWrapper(patchMovieByIdController),
);

moviesRouter.delete('/:id', isValidId, ctrlWrapper(deleteMovieByIdController));

export default moviesRouter;
