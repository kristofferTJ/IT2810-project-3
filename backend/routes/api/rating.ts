import express, { Request, Response } from 'express';
const router = express.Router();
import { Rating } from '../../models/Rating';

router.get('/', async (req: Request, res: Response) => {
  res.json('halla på deg');
});

module.exports = router;
