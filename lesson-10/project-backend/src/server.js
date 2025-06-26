import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// import { logger } from "./middlewares/logger.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import { notFoundHandler } from "./middlewares/notFoundHandler.js";

import authRouter from "./routers/auth-router.js";
import moviesRouter from "./routers/movies-router.js";

import { getEnvVar } from "./utils/getEnvVar.js";

export const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());
    app.use(cookieParser());
    // app.use(logger);

    app.use("/auth", authRouter);
    app.use("/movies", moviesRouter);

    app.use(errorHandler);
    app.get(notFoundHandler);

    const port = Number(getEnvVar("PORT", 3000));

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
};