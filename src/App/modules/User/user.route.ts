import express from 'express';
import { userController } from './user.controller';
import { zodValidateRequest } from '../../middleware/zodValidateRequest';
import { userValidation } from './user.validation';
import { authValidations } from '../Auth/auth.validation';
import { authController } from '../Auth/auth.controller';
const router = express.Router();

// all the user auth routes here
router.get('/users', userController.getAllUsers);
// user authentication routes
router.post(
  '/signup',
  zodValidateRequest(userValidation.userValidationSchema),
  userController.signup,
);
router.post(
  '/login',
  zodValidateRequest(authValidations.loginValidationSchema),
  authController.loginController,
);
router.post(
  '/refresh-token',
  zodValidateRequest(authValidations.refreshTokenValidationSchema),
  authController.AuthRefreshToken,
);
export const UserRoutes = router;
