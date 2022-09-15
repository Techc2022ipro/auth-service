import {Request, Response} from 'express';
import { AuthControllers } from '@/controller/AuthController';
import ErrorWrapper from '@libraries/libs/ParserWrapper';

export const signupUser = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'signup', async () => {
    return await AuthControllers.signupController(req.body);
  })
}
export const userLogin = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'login', async () => {
    const token = await AuthControllers.loginController(req.body);
    res.cookie('authToken', token.accessToken, {httpOnly: true});
    return 'cookie set';
  })
}
