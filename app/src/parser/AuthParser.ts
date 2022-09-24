import {Request, Response} from 'express';
import { AuthControllers } from '@/controller/AuthController';
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import Logger from '@/libraries/libs/Logger';

export const isVerified = async (req: Request, res: Response) => {
    res.send({isVerified: true, data: res.locals['user']});
}

export const logout = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'logout', async () => {
    res.clearCookie('authToken');
    return 'logged out';
  })
}

export const signupUser = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'signup', async () => {
    return await AuthControllers.signupController(req.body);
  })
}

export const userLogin = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'login', async () => {
    const response = await AuthControllers.loginController(req.body);
    res.cookie('authToken', response.jwt.accessToken, {httpOnly: true});
    return 'cookie set';
  })
}
