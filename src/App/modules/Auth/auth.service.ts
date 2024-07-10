import httpStatus from 'http-status';
import User from '../User/user.model';
import { createToken } from './auth.utils';
import config from '../../config';
import { TAuth } from './auth.interface';
import jwt, { JwtPayload } from 'jsonwebtoken';
import AppError from '../../apperrors/appErrors';

const loginUser = async (payload: TAuth) => {
  const user = await User.isUserExistsByCustomId(payload.email);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'This user is not found !');
  }

  if (!(await User.isPasswordMatched(payload?.password, user?.password))) {
    throw new AppError(httpStatus.FORBIDDEN, 'Password is not matched');
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };
  // console.log(jwtPayload);

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );
  const refreshToken = createToken(
    jwtPayload,
    config.jwt_refresh_secret as string,
    config.jwt_refresh_expires_in as string,
  );

  return {
    accessToken,
    user,
    refreshToken,
  };
};

const refreshToken = async (token: string) => {
  // token is valid or not
  const decoded = jwt.verify(
    token,
    config.jwt_refresh_secret as string,
  ) as JwtPayload;

  const { userEmail } = decoded;

  // check user exist or not
  const user = await User.isUserExistsByCustomId(userEmail);
  if (!user) {
    throw new AppError(httpStatus.NOT_FOUND, 'User is not found !');
  }

  const jwtPayload = {
    userEmail: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string,
  );

  return {
    accessToken,
    refreshToken,
  };
};

export const authServices = { loginUser, refreshToken };
