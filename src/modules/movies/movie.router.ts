import { ReviewControllers } from '../reviews/review.controller';
import { MovieController } from './movie.controller';
import express from 'express';

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getAllMovies);
router.get('/:slug', MovieController.getSingleMovieBySlug);
router.post("/:slug/review", ReviewControllers.addReview);

export const MovieRouter = router;
