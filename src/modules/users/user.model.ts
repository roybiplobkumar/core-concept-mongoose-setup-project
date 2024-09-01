import { model, Schema } from "mongoose";
import { TUser } from "./user.interface";
import { USER_ROLE, USER_STATUS } from "./user.constans";


const userSchema= new Schema<TUser>(
  {
    name:{
      type:String , 
      required:[true, 'name is require']
    },
    role:{
      type:String,
      required:[true, 'roll is require'],
      enum:Object.keys(USER_ROLE)
    },
    email:{
      type:String,
      required:[true, 'email is required']
    },
    password:{
      type:String,
      required:[true, 'password is required']
    },
  status:{
    type:String,
    required:[true, 'status is required '],
    enum:Object.keys(USER_STATUS),
    default:USER_STATUS.ACTIVE
  },
  PasswordChangeAt:{
    type:Date
  }
  }
)


export const User=model<TUser>("User", userSchema)