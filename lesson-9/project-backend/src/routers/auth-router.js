import { Router } from 'express';

import {
  registerController,
  loginController,
} from '../controllers/authControllers.js';

import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../utils/validateBody.js';

import { registerSchema, loginSchema } from '../validation/authSchemas.js';

const authRouter = Router();

authRouter.post(
  '/register',
  validateBody(registerSchema),
  ctrlWrapper(registerController),
);

authRouter.post(
  '/login',
  validateBody(loginSchema),
  ctrlWrapper(loginController),
);

export default authRouter;
