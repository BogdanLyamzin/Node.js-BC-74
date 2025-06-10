import {Router} from "express";

// import moviesControllers from "../controllers/moviesControllers.js";
import { getMoviesController, getMovieByIdController } from "../controllers/moviesControllers.js";

import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const moviesRouter = Router();

moviesRouter.get("/", ctrlWrapper(getMoviesController));

moviesRouter.get("/:id", ctrlWrapper(getMovieByIdController));

// moviesRouter.get("/", moviesControllers.getMoviesController);

export default moviesRouter;