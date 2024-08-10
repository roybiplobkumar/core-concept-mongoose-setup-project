import { model, Schema } from "mongoose";
import { TReviews } from "./review.interface";

const reviewsSchema = new Schema<TReviews>({
  movie:{
    type:Schema.Types.ObjectId,
    ref:"moview",
    required:true
  },
  email: {
    type: String,
    require: true,
  },
  rating: {
    type: Number,
    require: true,
  },
  comment: {
    type: String,
    required: true,
  },
});

export const Review = model<TReviews>('Review', reviewsSchema);