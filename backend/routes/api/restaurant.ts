import express, { Request, Response, NextFunction } from 'express';
const router = express.Router();
import { Restaurant } from '../../models/Restaurant';

//let Restaurant = RestaurantModule.Restaurant;

router.get('/', async (req: Request, res: Response) => {
  try {
    const restaurant = await Restaurant.find().limit(20);
    if (!restaurant) {
      return res.status(400).json({ msg: 'There are no restaurants' });
    }

    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
