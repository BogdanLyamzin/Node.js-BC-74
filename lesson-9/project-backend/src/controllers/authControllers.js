import { registerUser, loginUser } from '../services/auth.js';

import { refreshTokenLifetime } from '../constants/auth-constants.js';

export const registerController = async (req, res) => {
  await registerUser(req.body);

  res.json({
    message: 'Successfully register user',
  });
};

export const loginController = async (req, res) => {
  const { _id, accessToken, refreshToken } = await loginUser(req.body);

  res.cookie('refreshToken', refreshToken, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifetime),
  });

  res.cookie('sessionId', _id, {
    httpOnly: true,
    expires: new Date(Date.now() + refreshTokenLifetime),
  });

  res.json({
    status: 200,
    message: 'Successfully login user',
    data: {
      accessToken,
    },
  });
};
