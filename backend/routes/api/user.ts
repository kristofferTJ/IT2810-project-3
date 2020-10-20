import express, { Request, Response } from 'express';
const router = express.Router();
import { User } from '../../models/User';
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

// @route   POST api/users
// @desc    Register user
// @access  Pulic
router.post(
  '/',
  [
    //check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Passordet må være minst 6 karakterer langt').isLength({
      min: 6,
    }),
    check('name', 'Please include name').exists(),
  ],

  async (req: Request, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const { name, email, password } = req.body;

    // See if user exists
    try {
      let user = await User.findOne({ email });
      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Brukeren eksisterer allerede ' }] });
      }

      user = new User({
        name,
        email,
        password,
      });

      // Encrypt password
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);

      await user.save();

      // Return jsonwebtoken
      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err: Error, token: String) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send(`Server error`);
    }
  }
);

// @route   GET api/users
// @desc    Get 20 users
// @access  Pulic
router.get('/', async (req: Request, res: Response) => {
  try {
    const users = await User.find().limit(20);
    if (!users) {
      return res.status(400).json({ msg: 'There are no users' });
    }

    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
