import express from 'express';
import Logger from './libraries/libs/Logger';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ['http://localhost:3000', 'http://localhost:4000'],
  credentials: true
}));
app.use(router);

app.listen(8000, () => {
    Logger.info('listening to port 8000')
})
