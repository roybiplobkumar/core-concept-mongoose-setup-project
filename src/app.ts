import express, { NextFunction, Request, Response } from 'express';
import { MovieRouter } from './modules/movies/movie.router';
import { Request } from 'express';
import { notFound } from './middleware/notFound';
import { gobalErrorHandler } from './middleware/gobalErrorHandler';
const app = express();
//  persers
app.use(express.json());
//  route
app.use('/api/movies', MovieRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello santos!');
});

 app.use(notFound)
app.use(gobalErrorHandler)
export default app;
