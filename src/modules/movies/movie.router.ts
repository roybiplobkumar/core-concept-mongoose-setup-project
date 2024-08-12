import { AnyZodObject } from 'zod';
import { ReviewControllers } from '../reviews/review.controller';
import { MovieController } from './movie.controller';
import express, { NextFunction, Request, Response } from 'express';
import { zodMovieSchema } from './movie.validation';

const router = express.Router();

const validateZodRequest=(schema:AnyZodObject)=>{
  return async(req:Request, res:Response, next:NextFunction)=>{
    try{
      await schema.parse(req.body)
     next()

    }catch{
      next()
    }
  }
}

router.post('/', validateZodRequest(zodMovieSchema.creatZodValidationSchema), MovieController.createMovie);
router.get('/', MovieController.getAllMovies);
router.get('/:slug', MovieController.getSingleMovieBySlug);
router.post('/:slug/review', ReviewControllers.addReview);

export const MovieRouter = router;
