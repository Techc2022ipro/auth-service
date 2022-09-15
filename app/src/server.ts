import express, {Request, Response} from "express";
import Logger from './libraries/libs/Logger';
import cors from 'cors';
import cookieParser from "cookie-parser";

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));


app.post("/login", (req: Request, res: Response) => {
  console.log(req.body);
  res.send("you have reached zo")
});

app.listen(8000, () => {
    Logger.info("listening to port 8000")
})
