import { TUser } from './user.interface';
import { User } from './user.model';

const createAdminIntoDB = async (payload: TUser) => {
  const admin = await User.create(payload);
  return admin;
};
const updateUserIntoDb=async (_id:string, payload:TUser)=>{
  const result =await User.findByIdAndUpdate({_id}, payload);
  return result;


}
export const UserSivices = {
  createAdminIntoDB,
  updateUserIntoDb
};
