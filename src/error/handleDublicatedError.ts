import { TErrorsources } from '../interface/error.interface';

export const handleDublicatedError = (err: any) => {
  const match = err.message.match(/"([^"]*)"/);
  const extractedMessage = match && match[1];

  const errorSources: TErrorsources = [
    {
      path: '',
      message: `${extractedMessage} is allready exists`,
    },
  ];
  return errorSources;
};
