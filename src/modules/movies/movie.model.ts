import { model, Schema } from 'mongoose';
import { TMoies, TReviews } from './movie.interface';
import { format } from 'date-fns';
import slugify from 'slugify';
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
  }
});

// mongoose pre midlewere hook use   
  movieSchema.pre('save', async function(next){
      const date=format(this.releaseDate, "dd-MM-yyyy")
      this.slug=slugify(`${this.title}-${date}`, {lower:true})
      console.log(this.slug)
      next()
  }

)

// crate a model
export const Movie = model<TMoies>('Movie', movieSchema);
