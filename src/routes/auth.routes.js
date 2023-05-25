import { Router } from 'express';
import * as authController from '../controllers/auth.controller';
import { verifySignUp } from '../middlewares';
const router = Router();

router.post(
  '/signup',
  [verifySignUp.checkDuplicatedUsernameOrEmail, verifySignUp.checkRolesExisted],
  authController.signup
);
router.post('/signin', authController.signin);

export default router;
