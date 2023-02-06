import {verify} from "jsonwebtoken";
import {NextFunction, Request, Response} from "express";
import ErrorWrapper from '../libs/ParserWrapper';
import Logger from "../libs/Logger";
import {InternalServerError} from "../libs/error/Errors";

const IsVerified = (req: Request, res: Response, next: NextFunction) => {
  ErrorWrapper(res, 'isVerified', async () => {
    const token = req.headers.cookie;

    if(!token) return {isVerified: false} 
    
    const secret = process.env.ACCESS_TOKEN_SECRET;
    if(!secret) throw new InternalServerError();

    verify(token.toString().split('=')[1] ,secret, (err, decoded) => {
    if(err && err.name == 'TokenExpiredError') {
      Logger.error('Token expired');
    }
    res.locals['user'] = decoded;
  });
    next();
  })
}

export default IsVerified;

