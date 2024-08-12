import { model, Schema } from 'mongoose';
import { TMoies, TMovieMethods, TMovieModel } from './movie.interface';
import { format } from 'date-fns';
import slugify from 'slugify';

const movieSchema = new Schema<TMoies, TMovieModel, TMovieMethods>({
  title: { type: String, required: true, unique: true },
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
  slug: { type: String },
  movieName:{
    type:String,
    enum:["baba kano charkor", "sathi", "tumi kar"]
  }
});

// mongoose pre midlewere hook use
//   movieSchema.pre('save', async function(next){
//       const date=format(this.releaseDate, "dd-MM-yyyy")
//       this.slug=slugify(`${this.title}-${date}`, {lower:true})
//       console.log(this.slug)
//       next()
//   }

// )

movieSchema.method('crateSluge', function crateSluge(payload: TMoies) {
  const date = format(payload.releaseDate, 'dd-MM-yyyy');
  const slug = slugify(`${payload.title}-${date}`, { lower: true });
  return slug;
});

// crate a model
export const Movie = model<TMoies, TMovieModel>('Movie', movieSchema);
