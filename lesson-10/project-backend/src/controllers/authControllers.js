import { registerUser, loginUser, refreshUser, logoutUser } from '../services/auth.js';

import { refreshTokenLifetime } from '../constants/auth-constants.js';

const setupSession = (res, { _id, refreshToken })=> {
  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifetime),
  });

  res.cookie('sessionId', _id, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifetime),
  });
};

export const registerController = async (req, res) => {
  await registerUser(req.body);

  res.json({
    message: 'Successfully register user',
  });
};

export const loginController = async (req, res) => {
  const session = await loginUser(req.body);

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully login user',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const refreshController = async(req, res)=> {
  const session = await refreshUser(req.cookies);

  setupSession(res, session);

  res.json({
    status: 200,
    message: 'Successfully refresh user',
    data: {
      accessToken: session.accessToken,
    },
  });
};

export const logoutController = async(req, res)=> {
  if(req.cookies.sessionId) {
    await logoutUser(req.cookies.sessionId);
  }

  res.clearCookie("refreshToken");
  res.clearCookie("sessionId");

  res.status(204).send();
};