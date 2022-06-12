import express from "express";
import Logger from './libraries/libs/Logger';

const app = express();
app.use(express.json());

app.listen(1000, () => {
    Logger.info("listening to port 1000")
})
