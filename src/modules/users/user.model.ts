import { model, Schema } from 'mongoose';
import { TUser } from './user.interface';
import { USER_ROLE, USER_STATUS } from './user.constans';
import bcript from 'bcryptjs';
import config from '../../config';

const userSchema = new Schema<TUser>({
  name: {
    type: String,
    required: [true, 'name is require'],
  },
  role: {
    type: String,
    required: [true, 'roll is require'],
    enum: Object.keys(USER_ROLE),
  },
  email: {
    type: String,
    required: [true, 'email is required'],
  },
  password: {
    type: String,
    required: [true, 'password is required'],
  },
  status: {
    type: String,
    required: [true, 'status is required '],
    enum: Object.keys(USER_STATUS),
    default: USER_STATUS.ACTIVE,
  },
  PasswordChangeAt: {
    type: Date,
  },
});
userSchema.pre('save', async function(next) {
   const user=this;
   user.password= await bcript.hash(user.password, Number(config.salt_rounds));
   next();
})

userSchema.post('save', function(doc, next){
  doc.password="";
  next();
})
export const User = model<TUser>('User', userSchema);
