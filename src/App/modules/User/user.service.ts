import config from '../../config';
import { TUser } from './user.interface';
import User from './user.model';

//create user service
const createUserFormDb = async (payload: TUser) => {
  // set default password.
  payload.password = payload.password || (config.default_password as string);

  const result = await User.create(payload);
  const resultWithoutPassword = await User.findById(result._id).select(
    '-password',
  );
  return resultWithoutPassword;
};
// get all users service
const gelAllUsersFromDb = async () => {
  const result = await User.find();
  return result;
};
// login users services
const loginUserIntoDb = async () => {
  const result = await User.create();
  return result;
};

export const userServices = {
  createUserFormDb,
  gelAllUsersFromDb,
  loginUserIntoDb,
};
