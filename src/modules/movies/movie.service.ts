import { TMoies } from './movie.interface';
import { Movie } from './movie.model';

const crateMovieIntoDB = async (payload: TMoies) => {
  const result = await Movie.create(payload);
  return result;
};
const getAllMoviesIntoDB = async () => {
  const result = await Movie.find();
  return result;
};
const getSingelMovieIntoDB=async (id:string)=>{
   const result= await Movie.findById(id);
   return result;

}

export const MovieServices = {
  crateMovieIntoDB,
  getAllMoviesIntoDB,
  getSingelMovieIntoDB
};

