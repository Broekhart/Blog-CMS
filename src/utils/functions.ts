import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export async function encryptPassword(password: string) {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
}

export async function comparePasswords(password: string, hashedPassword: string) {
  return await bcrypt.compare(password, hashedPassword);
}

export async function signToken(id: string) {
  const secretKey = import.meta.env.JWT_PRIVATE_KEY;
  return jwt.sign({ id }, secretKey, {
    expiresIn: '30d',
  });
}
