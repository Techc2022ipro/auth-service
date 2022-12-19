import {Request, Response} from 'express';
import { AuthControllers } from '@/controller/AuthController';
import ErrorWrapper from '@libraries/libs/ParserWrapper';

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
    const token = await AuthControllers.loginController(req.body);
    res.cookie('authToken', token.accessToken, {httpOnly: true});
    return 'cookie set';
  })
}

export const getUserData = async (req: Request, res: Response) => {
  ErrorWrapper(res, 'getUserData', async () => {
    const query = parseInt(req.params.uid);
    return await AuthControllers.getUserByIdController(query)
  })
}
