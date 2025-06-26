import PinoHttp from "pino-http";

export const logger = PinoHttp({
    transport: {
        target: "pino-pretty"
    }
});