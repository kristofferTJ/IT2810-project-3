import express, { Response, NextFunction } from 'express';
const router = express.Router();
import { Restaurant } from '../../models/Restaurant';
import { IUser } from '../../models/User';
const auth = require('../../middleware/auth');
const fs = require('fs');
const fastcsv = require('fast-csv');

// let stream = fs.createReadStream(
//   'C:/Users/Bruker/Downloads/archive/three-stars-michelin-restaurants.csv'
// );

router.get('/', async (req: any, res: Response) => {
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

// router.post('/', async (req: Express.Request, res: Response) => {
//   let csvData: any = [];
//   let csvStream = fastcsv
//     .parse()
//     .on('data', function (data: any) {
//       csvData.push(
//         new Restaurant({
//           name: data[0],
//           year: data[1],
//           latitude: data[2],
//           longitude: data[3],
//           city: data[4],
//           region: data[5],
//           zipCode: data[6],
//           cuisine: data[7],
//           price: data[8],
//           url: data[9],
//           ratings: [],
//           comments: [],
//           stars: 3,
//         })
//       );
//     })
//     .on('end', function () {
//       // remove the first line: header
//       csvData.shift();
//       Restaurant.insertMany(csvData);

//       console.log('heihei');
//     });

//   stream.pipe(csvStream);
//   res.send('dette gikk bra');
// });

router.put('/:restaurant_id', auth, async (req: any, res: Response) => {
  const { rating } = req.body;
  let newRating: any;

  newRating = {
    user: req.user.id,
    rating,
  };
  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ msg: 'Denne restauranten er ikke i vår database' });
    }
    if (restaurant.ratings.some((rating) => (rating.user = req.user.id))) {
      restaurant.ratings = restaurant.ratings.filter((obj) => {
        obj.user.toString() !== req.user.id.toString();
      });
    }

    restaurant.ratings.unshift(newRating);

    await restaurant.save();
    return res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Restaurant not found' });
    }
    res.status(404).json({ msg: 'Page not found' });
  }
});

module.exports = router;
