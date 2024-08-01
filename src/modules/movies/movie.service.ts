import { TMoies } from './movie.interface';
import { Movie } from './movie.model';
import {  format } from "date-fns";

const crateMovieIntoDB = async (payload: TMoies) => {
   const date= format(payload.releaseDate,"dd-MM-yyyy");
   console.log(date);
  // const result = await Movie.create(payload);
  // return result;
};
const getAllMoviesIntoDB = async () => {
  const result = await Movie.find();
  return result;
};
const getSingelMovieIntoDBBySlug = async (slug: string) => {
  const result = await Movie.findById(slug);
  return result;
};

export const MovieServices = {
  crateMovieIntoDB,
  getAllMoviesIntoDB,
  getSingelMovieIntoDBBySlug,
};
