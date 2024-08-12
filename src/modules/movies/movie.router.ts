import { ReviewControllers } from '../reviews/review.controller';
import { MovieController } from './movie.controller';
import express from 'express';
import { zodMovieSchema } from './movie.validation';
import validateZodRequest from '../../middleware/validateZodRequest';

const router = express.Router();

router.post(
  '/',
  validateZodRequest(zodMovieSchema.creatZodValidationSchema),
  MovieController.createMovie,
);
router.get('/', MovieController.getAllMovies);
router.get('/:slug', MovieController.getSingleMovieBySlug);
router.post('/:slug/review', ReviewControllers.addReview);

export const MovieRouter = router;
