import express, { Request, Response } from 'express';
import { MovieRouter } from './modules/movies/movie.router';
import { notFound } from './middleware/NotFound';
import { globalErrorHandler } from './middleware/gobalErrorHandler';
import { UserRoute } from './modules/users/user.route';


const app = express();
//  persers
app.use(express.json());
//  route
app.use('/api/movies', MovieRouter);
app.use('/api/user', UserRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello santos!');
});

app.use(notFound);
app.use(globalErrorHandler);

export default app;
