import { Types } from 'mongoose';

export type TReviews = {
  movie: Types.ObjectId;
  email: string;
  rating: number;
  comment: string;
};
