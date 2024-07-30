import { MovieController } from "./movie.controller";
import express  from 'express';

const router = express.Router();

router.post('/', MovieController.createMovie);
router.get('/', MovieController.getAllMovies);

export const MovieRouter = router;
