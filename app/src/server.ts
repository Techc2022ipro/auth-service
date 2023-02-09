import express from 'express';
import Logger from './libraries/libs/Logger';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import router from './routes';
import helmet from 'helmet';

const app = express();
app.use(helmet.contentSecurityPolicy({
  directives: {
    default: ["self"],
    connectSrc: ["https://look-book.net","https://seller.look-book.net"],
  }
}));
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: ['https://look-book.net/api/','https://look-book.net','https://look-book.net/api', 'http://localhost:2000' , 'http://localhost:3000'],
  credentials: true
}));
app.use(router);
app.listen(8000, () => {
    Logger.info('listening to port 8000')
})
