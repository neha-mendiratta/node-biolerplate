import { Request, Response, NextFunction } from 'express';

const logging =
  () =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    console.info(req.path, req.url, req.headers, req.body);
    next();
  };

export default logging;
