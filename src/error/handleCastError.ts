import mongoose from "mongoose";
import { TErrorsources } from "../interface/error.interface";

export const handleCastError=(err:mongoose.Error.CastError)=>{
     const errorSources:TErrorsources=[{
      path:err?.path,
      message:err.message
     }] 
     return {
      message:'CastError',
      errorSources
     }
}