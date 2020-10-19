import express, { Request, Response } from 'express';
import { IUser } from '../../models/User';
const router = express.Router();
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

import { User } from '../../models/User';

// declare module 'express-serve-static-core' {
//   interface Request {
//     user: IUser;
//   }
//   interface Response {
//     myField?: string;
//   }
// }

// @route   GET api/auth
// @desc    GET user by token
// @access  Private
router.get('/', auth, async (req: any, res: Response) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth
// @desc    Authenticate user & get token
// @access  Pulic
router.post(
  '/',
  [
    check('email', 'Emailen er ikke gyldig!').isEmail(),
    check('password', 'Passordfeltet kan ikke være tomt').exists(),
  ],
  async (req: any, res: Response) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    // See if user exists
    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Emailen eksisterer ikke' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(400).json({ errors: [{ msg: 'Feil passord' }] });
      }

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

module.exports = router;
