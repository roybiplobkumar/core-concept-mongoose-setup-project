import { ErrorRequestHandler } from 'express';
// import { TErrorsources } from "../interface/error.interface";
import { handleValidationError } from '../error/handleValidationError';
import { TErrorsources } from '../interface/error.interface';
import { handleCastError } from '../error/handleCastError';
import { handleDublicatedError } from '../error/handleDublicatedError';
import { ZodError } from 'zod';
import { handleZodError } from '../error/handleZodError';
import AppError from '../error/AppError';

export const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = 500;
  let message = 'Something went wrong';
  let errorSources: TErrorsources = [
    {
      path: '',
      message: 'something went wrong',
    },
  ];

  if (err.name === 'ValidationError') {
    const simplified = handleValidationError(err);
    errorSources = simplified?.errorSources;
  } else if (err.name == 'CastError') {
    const simplified = handleCastError(err);
    errorSources = simplified;
  } else if (err.code === 11000) {
    const simplified = handleDublicatedError(err);
    errorSources = simplified;
    console.log(errorSources);
  } else if (err instanceof ZodError) {
    const simplified = handleZodError(err);
    errorSources = simplified;
  }
  else if(err instanceof AppError){
    statusCode=err.statusCode,
    message=err.message,
    errorSources=[{
      path:"",
      message:err.message
    }]
  }

  res.status(statusCode).json({
    success: false,
    message: err.message,
    errorSources,
    err,
  });
};
