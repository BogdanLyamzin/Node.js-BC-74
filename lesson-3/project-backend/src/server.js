import express from "express";
import cors from "cors";
import PinoHttp, { pinoHttp } from "pino-http";

console.log(process.env.PORT);

export const startServer = ()=> {
    const app = express();

    app.use(cors());
    app.use(express.json());
    // app.use(pinoHttp({
    //     transport: {
    //         target: "pino-pretty"
    //     }
    // }));

    app.get("/", (req, res)=> {
        res.json({
            message: "Server start"
        });
    });

    app.use((error, req, res, next)=> {
        const {status, message} = error;
        res.status(status).json({
            status,
            message,
        });
    });

    app.get((req, res)=> {
        res.status(404).json({
            message: `${req.url} not found`
        });
    });

    const port = Number(process.env.PORT) || 3000;

    app.listen(port, ()=> console.log(`Server running on ${port} port`));
};