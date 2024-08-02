import { model, Schema } from 'mongoose';
import { TMoies, TReviews } from './movie.interface';
const reviewsSchema = new Schema<TReviews>({
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

const movieSchema = new Schema<TMoies>({ 
  title: { type: String, required: true },
  description: {
    type: String,
    required: true,
  },
  releaseDate: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    required: true,
  },
  viewCount: {
    type: Number,
    required: true,
  },
  reviews: {
    type: [reviewsSchema],
  },
  slug:{type:String,
    required:[true, "sluge is  require"]
  }
});

// crate a model
export const Movie = model<TMoies>('Movie', movieSchema);
