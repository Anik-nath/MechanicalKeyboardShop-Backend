import { Schema, model } from 'mongoose';
import { TUser, UserModel } from './user.interface';
import bcrypt from 'bcrypt';
import config from '../../config';

const userSchema = new Schema<TUser, UserModel>(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      optional: true,
    },
    phone: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
    },
    address: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
  },
);
// bcrypt password before saving
userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(
    this.password,
    Number(config.bycrpt_salt_round),
  );
  next();
});

// for user login first check user is exists or not exists
userSchema.statics.isUserExistsByCustomId = async function (email: string) {
  const result = await User.findOne({ email }).select('+password');
  return result;
};
// password matching
userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
};

const User = model<TUser, UserModel>('User', userSchema);
export default User;
