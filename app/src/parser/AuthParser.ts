import {Request, Response} from 'express';
import { AuthControllers } from '@/controller/AuthController';
import ErrorWrapper from '@libraries/libs/ParserWrapper';
import Logger from '@/libraries/libs/Logger';

export const isVerified = async (req: Request, res: Response) => {
    Logger.info('isVerified');
    res.send({isVerified: true});
}

export const logout = async (req: Request, res: Response) => {
    Logger.info('logout');
    res.clearCookie('authToken');
    res.end();
    return 'logged out';
}

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
