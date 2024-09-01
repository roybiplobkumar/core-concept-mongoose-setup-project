
import { TMoies } from './movie.interface';
import { Movie } from './movie.model';
import { QueryBuilder } from '../../builder/QueryBuilder';

const crateMovieIntoDB = async (payload: TMoies) => {
  //  const date= format(payload.releaseDate,"dd-MM-yyyy");
  //  console.log(date);

  //   const slug= slugify(`${payload.title}-${date}`, {
  //     lower:true
  //   });
  //   console.log(slug)
  // const result = await Movie.create(payload);
  // return result;

  const result = new Movie(payload);
  const slug = result.crateSluge(payload);
  result.slug = slug;
  await result.save();
  return result;
};
const getAllMoviesIntoDB = async (payload:Record<string,unknown>) => {
  // search  is parcial match  
   
//   let searchTerm="";
//   if(payload?.searchTerm){
//     searchTerm=payload.searchTerm as string;
//   }
  
//   const searchAbleFields=["title", 'genre']

//   const searchMovies =  Movie.find(
//     {
//       $or:searchAbleFields.map(fied=>({
//         [fied]:{$regex:searchTerm, $options:"i"}
//       }))
//     }
//   )

//   //  paginatiion 
//   const limit: number = Number(payload.limit || 10);
//   let skip: number = 0;
  
//   if (payload.page) {
//       const page = Number(payload.page || 1);
      
//       skip =Number( (page - 1) * limit);
//   }
//   const skipQuery = searchMovies.skip(skip);
//   const limitQuery = skipQuery.limit(limit);

//     // sortings
//     let sortBy="releaseDate" 
//     if(payload.sortBy){
//       sortBy=payload.sortBy as string
//     }

// const sortQuety= limitQuery.sort(sortBy);

// // fields filtering 
//   const fields =(payload.fields as string)?.split(',').join("") ||'';

//   const fielsQurey = sortQuety.select(fields);
 


//   // filtering 
//   // filtering  is actually match 
//   const queryObj={...payload}

//   const excludeFieds=['searchTerm','page','limit', "sortBy","fields"]
//   excludeFieds.forEach(e=>(
//     delete queryObj[e]
//   ))

 
//     const result =await fielsQurey.find(queryObj)
//     return result
  const movieQuery=  new QueryBuilder(Movie.find(),payload).search(['title', 'genre']).paginate().sort().fields().filter();
    const resust= await movieQuery.modelQuery
    return resust;
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
