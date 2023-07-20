import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import validator from 'validator';
import hashPassword from '@/shared/functions/hashPassword';

const { isEmail } = validator;

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please enter a name'],
    },
    email: {
      type: String,
      required: [true, 'Please enter an email'],
      unique: true,
      lowercase: true,
      validate: [isEmail, 'Email format is not valid'],
    },
    password: {
      type: String,
      minLength: [8, 'Password must have at least 8 characters'],
      required: true,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.methods.matchPassword = async function (enteredPassword: string) {
  const isPassword = await bcrypt.compare(enteredPassword, this.password);
  return isPassword;
};

UserSchema.pre('save', async function (next) {
  if (!this.isModified(['password', 'isAdmin'])) {
    next();
  }
  if (this.isAdmin) this.isAdmin = false;
  this.password = await hashPassword(this.password);
});

const User = mongoose.models.User || mongoose.model('User', UserSchema);

export default User;
