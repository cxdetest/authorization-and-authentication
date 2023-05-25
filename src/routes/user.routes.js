import { Router } from 'express';
import * as userController from '../controllers/user.controller';
import { authJWT, verifySignUp } from '../middlewares';

const router = Router();

router.post(
  '/',
  [authJWT.verifyToken, authJWT.isAdmin, verifySignUp.checkRolesExisted],
  userController.createUser
);

export default router;
