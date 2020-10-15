import express, { Request, Response, NextFunction } from 'express';
import { IUser } from '../models/User';
const jwt = require('jsonwebtoken');
const config = require('config');

declare module 'express-serve-static-core' {
  interface Request {
    user: IUser;
  }
  interface Response {
    myField?: string;
  }
}

module.exports = function (req: Request, res: Response, next: NextFunction) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    const decode = jwt.verify(token, config.get('jwtSecret'));

    req.user = decode.user;
    next();
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
};
