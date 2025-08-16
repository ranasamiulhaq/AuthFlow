import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export const createSecretToken = (id) => {
  return jwt.sign(
    { id },
    process.env.TOKEN_KEY,
    { expiresIn: 60 * 60 * 1000}
  );
};