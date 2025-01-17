import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join((process.cwd(), '.env')) });

export default {
  port: process.env.PORT,
  databaseUrl: process.env.DATABASEURL,
  default_password: process.env.DEFAULT_PASSWORD,
  bycrpt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
  jwt_access_secret: process.env.JWT_ACCESS_SECRET,
  jwt_access_expires_in: process.env.JWT_ACCESS_EXPIRES_IN,
  jwt_refresh_secret: process.env.JWT_REFRESH_TOKEN,
  jwt_refresh_expires_in: process.env.JWT_REFRESH_TOKEN_EXPIRES_IN,
  NODE_ENV: process.env.NODE_ENV,
};
