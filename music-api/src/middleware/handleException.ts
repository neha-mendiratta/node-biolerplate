import { HttpException } from 'exceptions/index';
import { Request, Response, NextFunction } from 'express';

interface ErrorResponse {
  status: number;
  message: string;
  code?: string | number;
  errors?: any;
}

const handleError = () => (err: HttpException, req: Request, res: Response, next: NextFunction) => {
  if (res.headersSent) {
    return next(err);
  }

  const response: ErrorResponse = {
    status: err.statusCode || 500,
    message: err.message || 'Server Error',
  };

  if (err.errors) {
    response.errors = err.errors;
  }

  if (err.errorCode) {
    response.errors = err.errorCode;
  }

  return res.status(err.statusCode || 500).json({ error: response });
};

export default handleError;
