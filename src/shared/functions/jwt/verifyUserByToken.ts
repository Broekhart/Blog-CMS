import jwt from 'jsonwebtoken';
import User from '../../mongoose/models/user';

const verifyUserByToken = async (token: string) => {
  try {
    const { id } = await jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(id);

    return user;
  } catch (e) {
    console.log(e);
    return false;
  }
};

export default verifyUserByToken;
