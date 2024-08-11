import mongoose from "mongoose";
import { TErrorsources } from "../interface/error.interface";


export const handleValidationError=(err:mongoose.Error.ValidationError)=>{

       const errorSources:TErrorsources =Object.values(err.errors).map((val:mongoose.Error.ValidatorError|mongoose.Error.CastError)=>{
        return {
          path:val?.path,
          message:val.message
        }
       });
        
       return {
        message:"Validation Error",
        errorSources
       };


}