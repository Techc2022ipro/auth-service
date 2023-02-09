import {
  getUserData, 
  health, 
  isVerified, 
  logout, 
  signupUser, 
  userLogin} from '../parser/AuthParser';
import { Router } from 'express';
import VerifyToken from '@/libraries/middlewares/VerifyToken';
import multer from 'multer';
import {createUserProfile, getProfileById} from '@/parser/ProfileParser';

const store = multer.diskStorage({
  filename: (req, file, cb) => {
    cb(null, Date.now() + "--" + file.originalname);
  },
})

const upload = multer({storage: store});
const router = Router();
export default router;

router.get('/', health);
router.get('/logout',VerifyToken ,logout);
router.get('/isVerified',VerifyToken ,isVerified);
router.get('/getuser/:uid',getUserData);
router.get('/profile/:uid', getProfileById);
router.post('/profile', [VerifyToken, upload.single('profilePic')], createUserProfile);
router.post('/signup', signupUser);
router.post('/login', userLogin);


