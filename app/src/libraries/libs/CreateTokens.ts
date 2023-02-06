import {sign, verify} from 'jsonwebtoken';
import process from 'process';
import {InternalServerError} from './error/Errors';

const CreateTokens = (user: {uid: number, username: string, email: string}): {accessToken: string, refreshToken: string}=> {
  const accessSecret = process.env.ACCESS_TOKEN_SECRET;
  if(!accessSecret) throw new InternalServerError();
  const refreshSecret = process.env.REFRESH_TOKEN;
  if(!refreshSecret) throw new InternalServerError;
  const accessToken = sign(user, accessSecret, { expiresIn: '1800s' });
  const refreshToken = sign(user, refreshSecret);
  const token = {
    accessToken: accessToken,
    refreshToken: refreshToken
  }; 
  return token;
};

export default CreateTokens;
