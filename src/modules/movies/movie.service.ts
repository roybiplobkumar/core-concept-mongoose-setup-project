import AppError from '../../error/AppError';
import { TMoies } from './movie.interface';
import { Movie } from './movie.model';

const crateMovieIntoDB = async (payload: TMoies) => {
  //  const date= format(payload.releaseDate,"dd-MM-yyyy");
  //  console.log(date);

  //   const slug= slugify(`${payload.title}-${date}`, {
  //     lower:true
  //   });
  //   console.log(slug)
  // const result = await Movie.create(payload);
  // return result;
   throw new AppError(401,"testing app error", 'not')
  const result = new Movie(payload);
  const slug = result.crateSluge(payload);
  result.slug = slug;
  await result.save();
  return result;
};
const getAllMoviesIntoDB = async () => {
  throw new Error("this is custom  error")
  const result = await Movie.find();
  return result;
};
const getSingelMovieIntoDBBySlug = async (slug: string) => {
  const result = await Movie.findOne({ slug: slug });
  return result;
};

export const MovieServices = {
  crateMovieIntoDB,
  getAllMoviesIntoDB,
  getSingelMovieIntoDBBySlug,
};
