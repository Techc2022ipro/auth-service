import {signupUser} from '../parser/AuthParser';
import { Router } from 'express';

const router = Router();
export default router;

router.post('/signup', signupUser);

