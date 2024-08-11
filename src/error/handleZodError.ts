import { ZodError } from 'zod';

export const handleZodError = (err: ZodError) => {
  const handleError = err.issues.map((err) => {
    return {
      errorSources: err.path[err.path.length - 1],
      message: err.message,
    };
  });
  return handleError;
};
