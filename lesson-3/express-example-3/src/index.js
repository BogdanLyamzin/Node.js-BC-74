import express from "express";
import cors from "cors";
import PinoHttp, { pinoHttp } from "pino-http";

import movies from "./db/movies.js";

const app = express();

const logger = pinoHttp({
    transport: {
        target: "pino-pretty"
    }
})

app.use(cors());
// app.use(logger);
// const corsMiddleware = cors();
// app.use(corsMiddleware);

/*
const cors = options => {
    return (req, res, next)=> {
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
        res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
        res.setHeader("Access-Control-Allow-Credentials", true);
        next();
    }
}
*/
/*
app.use((req, res, next)=> {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next();
})
*/
// app.use((req, res, next)=> {
//     console.log("First middleware");
//     next();
// })

// app.use((req, res, next)=> {
//     console.log("Second middleware");
//     next();
// })

app.get("/genres", (req, res)=> {
    res.json([]);
})

app.get("/movies", (req, res)=> {
    res.json(movies);
})

app.use((req, res)=> {
    res.status(404).json({
        message: `${req.url} not found`
    })
})

app.listen(3000, ()=> console.log("Server runnung on 3000 port"));