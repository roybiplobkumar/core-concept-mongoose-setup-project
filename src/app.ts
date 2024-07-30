import express, { Request, Response } from 'express';
import { MovieRouter } from './modules/movies/movie.router';
const app = express();
//  persers
app.use(express.json());
//  route
app.use('/api/movies', MovieRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello santos!');
});

export default app;
