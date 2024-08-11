import { ErrorRequestHandler } from "express";
// import { TErrorsources } from "../interface/error.interface";
import { handleValidationError } from "../error/handleValidationError";
import { TErrorsources } from "../interface/error.interface";
import { handleCastError } from "../error/handleCastError";

export const globalErrorHandler:ErrorRequestHandler=(err, req, res, next)=>{
  let statusCode=500;
  let message='Something went wrong';
 let errorSources:TErrorsources=[
    {
      path:"",
      message:"something went wrong"
    }
  ];

  if(err.name==="ValidationError"){
    const simplified=handleValidationError(err)
     errorSources=simplified?.errorSources
    
  }
 
   else if(err.name=="CastError"){
      const simplified=handleCastError(err)
      errorSources=simplified
   }


  res.status(statusCode).json({
    success:false,
    message: message,
    errorSources
  
    
  })
}