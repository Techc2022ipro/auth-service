import {signupUser, userLogin} from '../parser/AuthParser';
import { Router } from 'express';

const router = Router();
export default router;

router.post('/signup', signupUser);
router.post('/login', userLogin);
