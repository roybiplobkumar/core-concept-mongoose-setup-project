import { Request, Response } from 'express';
import { MovieServices } from './movie.service';
import { catchAsync } from '../utils/catchAsync';
import { NextFunction } from 'express';
import { z } from 'zod';

// const createMovie = async (req: Request, res: Response) => {
//   try {
//     const movieData = req.body;
//     const result = await MovieServices.crateMovieIntoDB(movieData);
//     res.status(200).json({
//       success: true,
//       message: 'movie create succesfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err?.message || 'someting worng ',
//       err: err,
//     });
//   }
// };

const zodValidationSchema=z.object({
  title:z.string(),
  description:z.string(),
  releaseDate:z.string(),
  genre:z.string(),
  isDeleted:z.boolean(),
  viewCount:z.number(),
  slug:z.string().optional()
})



const createMovie =catchAsync(async(req:Request,res:Response, next:NextFunction)=>{
  const movieData = req.body;
     zodValidationSchema.parse(movieData);
  const result = await MovieServices.crateMovieIntoDB(movieData);
  res.status(200).json({
    success: true,
    message: 'movie create succesfully',
    data: result,
  });
})

// const getAllMovies = async (req: Request, res: Response) => {
//   try {
//     const result = await MovieServices.getAllMoviesIntoDB();
//     res.status(200).json({
//       success: true,
//       message: 'ALL Movie Retrive successFully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(200).json({
//       success: false,
//       message: 'Movie Retrive fail',
//       err: err,
//     });
//   }
// };
const getAllMovies=catchAsync(async (req:Request, res:Response, next:NextFunction)=>{
  const result = await MovieServices.getAllMoviesIntoDB();
      res.status(200).json({
        success: true,
        message: 'ALL Movie Retrive successFully',
        data: result,
      });
})
// const getSingleMovieBySlug = async (req: Request, res: Response) => {
//   try {
//     const slug = req.params.slug;
//     const result = await MovieServices.getSingelMovieIntoDBBySlug(slug);
//     res.status(200).json({
//       success: true,
//       message: 'Movie Retrive Successfully',
//       data: result,
//     });
//   } catch (err: any) {
//     res.status(500).json({
//       success: false,
//       message: err.message || 'someting woring ',
//       err: err,
//     });
//   }
// };
const getSingleMovieBySlug=catchAsync(async (req:Request, res:Response, next:NextFunction)=>{
  const slug = req.params.slug;
    const result = await MovieServices.getSingelMovieIntoDBBySlug(slug);
    res.status(200).json({
      success: true,
      message: 'Movie Retrive Successfully',
      data: result,
    });
})

export const MovieController = {
  createMovie,
  getAllMovies,
  getSingleMovieBySlug,
};
