import mongoose, { Schema, model, Document, Model } from 'mongoose';
import { IRating } from './Rating';

//name,year,latitude,longitude,city,region,zipCode,cuisine,price,url

export interface IUser extends Document {
  name: String;
  email: string;
  password: String;
  ratings: IRating['_id'];
  date: Date;
}

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model<IUser>('user', UserSchema);
