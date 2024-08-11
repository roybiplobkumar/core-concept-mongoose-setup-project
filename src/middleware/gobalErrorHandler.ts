import { ErrorRequestHandler } from "express";
// import { TErrorsources } from "../interface/error.interface";
import { handleValidationError } from "../error/handleValidationError";

export const globalErrorHandler:ErrorRequestHandler=(err, req, res, next)=>{
  // let statusCode=500;
  // let message='Something went wrong';
  // const errorSources:TErrorsources=[
  //   {
  //     path:"",
  //     message:"something went wrong"
  //   }
  // ];

  if(err.name==="ValidationError"){
    const simplified=handleValidationError(err)
    console.log(simplified)
    
  }
   console.log(err.name)

  res.status(500).json({
    success:false,
    message:"somthing went wrong ",
    err:err
  })
}