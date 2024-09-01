import { catchAsync } from '../utils/catchAsync';
import { UserSivices } from './user.sevices';

const createAdmin = catchAsync(async (req, res) => {
  const adminData = req.body;
  const result = await UserSivices.createAdminIntoDB(adminData);
  res.status(200).json({
    success: true,
    message: 'Admin Created Successfully',
    data: result,
  });
});
const updateUser= catchAsync(async (req, res)=>{
  const {userId}=req.params;
  const  result= await UserSivices.updateUserIntoDb(userId, req.body);
  res.status(200).json({
    success:true, 
    message:"User Updated succesfuly",
    data:result,
  })
})

export const UserController = {
  createAdmin,
  updateUser
};
