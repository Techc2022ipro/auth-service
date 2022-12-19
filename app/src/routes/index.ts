import {getUserData, isVerified, logout, signupUser, userLogin} from '../parser/AuthParser';
import { Router } from 'express';
import VerifyToken from '@/libraries/middlewares/VerifyToken';

const router = Router();
export default router;

router.get('/logout',VerifyToken ,logout);
router.get('/isVerified',VerifyToken ,isVerified);
router.get('/getuser/:uid',getUserData);
router.post('/signup', signupUser);
router.post('/login', userLogin);
