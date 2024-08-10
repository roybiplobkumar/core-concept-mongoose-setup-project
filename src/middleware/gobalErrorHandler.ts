import { NextFunction, Request, Response } from 'express';

export const gobalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  res.status(500).json({
    success: false,
    message: err.message || 'something worng',
    error: err,
  });
};
