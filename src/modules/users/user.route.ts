import express from 'express';
import { UserController } from './user.controller';
import validateZodRequest from '../../middleware/validateZodRequest';
import { UserValidations } from './user.validation';
const route = express.Router();

route.post(
  '/create-admin',
  validateZodRequest(UserValidations.createAdminValidation),
  UserController.createAdmin,
);
route.put(
  '/:userId',
  validateZodRequest(UserValidations.updateUserValidation),
  UserController.updateUser
);
export const UserRoute = route;
