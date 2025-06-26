import { startServer } from "./server.js";
import { initMongodbConnection } from "./db/initMongodbConnection.js";

const bootstrap = async()=> {
    await initMongodbConnection();
    startServer();
};

bootstrap();
