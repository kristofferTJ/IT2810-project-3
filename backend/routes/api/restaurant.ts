import express, { Response, Request } from 'express';
const router = express.Router();
import { Restaurant } from '../../models/Restaurant';
// import { IUser } from '../../models/User';
// import { IRating } from '../../models/Restaurant';
// import { IComment } from '../../models/Restaurant';
// const auth = require('../../middleware/auth');
// const fs = require('fs');
// const fastcsv = require('fast-csv');

// let stream = fs.createReadStream(
//   'C:/Users/Bruker/Downloads/archive/three-stars-michelin-restaurants.csv'
// );

// @route   GET api/restaurant
// @desc    Get 20 restaurants
// @access  Pulic
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

// @route   PUT api/restaurant/rate/:restaurant_id
// @desc    Rate restaurant
// @access  Private
// router.put('/rate/:restaurant_id', auth, async (req: any, res: Response) => {
//   const { rating } = req.body;

//   const newRating = {
//     user: req.user.id,
//     rating,
//   } as IRating;

//   try {
//     const restaurant = await Restaurant.findById(req.params.restaurant_id);
//     if (!restaurant) {
//       return res
//         .status(404)
//         .json({ msg: 'Denne restauranten er ikke i vår database' });
//     }
//     if (restaurant.ratings.some((rating) => (rating.user = req.user.id))) {
//       restaurant.ratings = restaurant.ratings.filter((obj) => {
//         obj.user.toString() !== req.user.id.toString();
//       });
//     }

//     restaurant.ratings.unshift(newRating);

//     await restaurant.save();
//     return res.json(restaurant);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == 'ObjectId') {
//       return res.status(400).json({ msg: 'Restaurant not found' });
//     }
//     res.status(404).json({ msg: 'Page not found' });
//   }
// });

// @route   PUT api/restaurant/comment/:restaurant_id
// @desc    comment on restaurant
// @access  Public
router.put('/comment/:restaurant_id', async (req: Request, res: Response) => {
  const { comment } = req.body;

  // const newComment = {
  //   user: req.user.id,
  //   comment,
  // } as IComment;

  try {
    const restaurant = await Restaurant.findById(req.params.restaurant_id);
    if (!restaurant) {
      return res
        .status(404)
        .json({ msg: 'Denne restauranten er ikke i vår database' });
    }
    // if (restaurant.comments.some((comment) => comment.user == req.user.id)) {
    //   restaurant.comments = restaurant.comments.filter((obj) => {
    //     obj.user.toString() !== req.user.id.toString();
    //   });
    // }

    restaurant.comments.unshift(comment);

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

// // @route   PUT api/restaurant/comment/:restaurant_id
// // @desc    comment on restaurant
// // @access  Private
// router.put('/comment/:restaurant_id', auth, async (req: any, res: Response) => {
//   const { comment } = req.body;

//   const newComment = {
//     user: req.user.id,
//     comment,
//   } as IComment;

//   try {
//     const restaurant = await Restaurant.findById(req.params.restaurant_id);
//     if (!restaurant) {
//       return res
//         .status(404)
//         .json({ msg: 'Denne restauranten er ikke i vår database' });
//     }
//     if (restaurant.comments.some((comment) => comment.user == req.user.id)) {
//       restaurant.comments = restaurant.comments.filter((obj) => {
//         obj.user.toString() !== req.user.id.toString();
//       });
//     }

//     restaurant.comments.unshift(newComment);

//     await restaurant.save();
//     return res.json(restaurant);
//   } catch (err) {
//     console.error(err.message);
//     if (err.kind == 'ObjectId') {
//       return res.status(400).json({ msg: 'Restaurant not found' });
//     }
//     res.status(404).json({ msg: 'Page not found' });
//   }
// });

// @route   PUT api/restaurant/filter
// @desc    Get restaurants by presented filter
// @access  Public
router.get('/filter', async (req: any, res: Response) => {
  try {
    const regions: string[] = [];
    const cuisines: string[] = [];
    const prices: string[] = [];

    const skipAmount: number = req.query.skip ? parseInt(req.query.skip) : 0;
    const nameo: string = req.query.name
      ? req.query.name.toLocaleLowerCase()
      : '';
    const limitAmount =
      req.query.limit && req.query.limit === 'none' ? 151 : 20;

    type sortType = {
      name?: number;
      price?: number;
      stars?: number;
    };
    type filterType = {
      region?: object;
      price?: object;
      cuisine?: object;
      name: {
        $regex: string;
        $options: string;
      };
    };
    let sort: sortType = {};

    let filter: filterType = {
      name: {
        $regex: '',
        $options: '',
      },
    };

    for (const key of Object.keys(req.query)) {
      if (key.startsWith('region')) {
        regions.push(req.query[key]);
      }
      if (key.startsWith('cuisine')) {
        cuisines.push(req.query[key]);
      }
      if (key.startsWith('price')) {
        prices.push(req.query[key]);
      } else if (key === 'sort') {
        const value = req.query[key];
        const isDESC = value.endsWith('DESC');
        if (value.startsWith('name')) {
          sort.name = isDESC ? -1 : 1;
        } else if (value.startsWith('price')) {
          sort.price = isDESC ? -1 : 1;
        } else if (value.startsWith('stars')) {
          sort.stars = isDESC ? -1 : 1;
        } else {
          sort.name = 0;
          sort.price = 0;
          sort.stars = 0;
        }
      }
    }

    if (regions.length !== 0) {
      filter.region = { $in: regions };
    }
    if (prices.length !== 0) {
      filter.price = { $in: prices };
    }
    if (cuisines.length !== 0) {
      filter.cuisine = { $in: cuisines };
    }

    filter.name = {
      $regex: nameo,
      $options: 'i',
    };
    const restaurant = await Restaurant.find(filter)
      .sort(sort)
      .skip(skipAmount)
      .limit(limitAmount);
    res.json(restaurant);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
