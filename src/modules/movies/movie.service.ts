import { TMoies } from './movie.interface';
import { Movie } from './movie.model';

const crateMovieIntoDB = async (payload: TMoies) => {
  const result = await Movie.create(payload);
  return result;
};

export const MovieServices = {
  crateMovieIntoDB,
};
