import {Request, Response} from 'express';
import { AuthControllers } from '@/controller/AuthController';
import ErrorWrapper from '@libraries/libs/ParserWrapper';

export const signupUser = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'signup', async () => {
    return await AuthControllers.signupController(req.body);
  })
}
