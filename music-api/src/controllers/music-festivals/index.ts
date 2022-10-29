import { NextFunction, Request, Response, Router } from 'express';
import musicFestivalList from '../../utils/music-festival-list';

const route = Router();
route.get('/',  async (req: Request, res: Response, next: NextFunction) => {
  try {
    res.status(200).json(musicFestivalList);
  } catch (e: any) {
    console.error(e);
    next(e);
  }
});

export default route;
