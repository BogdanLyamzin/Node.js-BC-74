import { Router } from 'express';

import {
  registerController,
  loginController,
  refreshController,
  logoutController,
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

authRouter.post("/refresh", ctrlWrapper(refreshController));

authRouter.post("/logout", ctrlWrapper(logoutController));

export default authRouter;
