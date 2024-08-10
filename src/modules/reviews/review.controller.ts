import { NextFunction, Request, Response } from "express";
import { catchAsync } from "../utils/catchAsync";
import { ReviewServices } from "./review.services";


const addReview = catchAsync(async (req: Request, res: Response, next: NextFunction) => {
  const { slug } = req.params;
  const reviewData = req.body;
  const result = await ReviewServices.addReview(slug, reviewData);

  res.json({
    success: true,
    message: 'Review is created successfully!',
    data: result,
  });
});

export const ReviewControllers ={
  addReview
}