import express, { Request, Response } from 'express';
import { MovieServices } from './movie.service';
const router = express.Router();

router.post('/', async (req: Request, res: Response) => {
  const movieData = req.body;
  const result = await MovieServices.crateMovieIntoDB(movieData);

  res.json({
    success: true,
    message: 'movie create succesfully',
    data: result,
  });
});

export const MovieRouter = router;
