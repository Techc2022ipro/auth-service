import { BaseError, InternalServerError } from './error/Errors';
import { Response } from 'express';
import Logger from './Logger';

type callBackFunction = () => object;

export default async (res: Response,route: string,callback: callBackFunction) => {
  try{
    Logger.info(`Route: ${route}`);
    res.send(await callback());
  }catch(e){
    if(e instanceof BaseError) {
      Logger.error(e.message);
      e.respond(res);
    } else {
      Logger.error('server error');
      new InternalServerError().respond(res);
    }
  }
};
