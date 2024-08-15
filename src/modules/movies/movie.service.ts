import { number, string, unknown } from 'zod';
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
const getAllMoviesIntoDB = async (payload:Record<string,unknown>) => {
  let searchTerm="";
  if(payload?.searchTerm){
    searchTerm=payload.searchTerm as string;
  }
  if(payload?.genre){
    searchTerm=payload?.genre as string
  }
  const searchAbleFields=["title", 'genre']


 
  const searchMovies =  Movie.find(
    {
      $or:searchAbleFields.map(fied=>({
        [fied]:{$regex:searchTerm, $options:"i"}
      }))
    }
  )

  //  paginatiion 
  let limit :number=Number(payload.limit||10)  
  let skip:number=0;
  if(payload.page){
      const page =Number(payload.page ||1)
      skip=Number(page-1)*limit
  }

  const skipQuery=searchMovies.skip(skip);
  const limitQuery=skipQuery.limit(limit)



  // filtering 
  const queryObj={...payload}
  const excludeFieds=['searchTerm']
  excludeFieds.forEach(e=>(
    delete queryObj[e]
  ))
 
    const result =await limit.find(queryObj)
    return result
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
