import mongoose, { Schema, model, Document, Model, Types } from 'mongoose';
import { IRating } from './Restaurant';
import { IComment } from './Restaurant';

//name,year,latitude,longitude,city,region,zipCode,cuisine,price,url

export interface IUser extends Document {
  id: Types.ObjectId;
  name: String;
  email: string;
  password: String;
  ratings: IRating[];
  comments: IComment[];
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
  ratings: [
    {
      restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
      },
      rating: {
        type: Number,
      },
    },
  ],
  comments: [
    {
      restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurants',
      },
      comment: {
        type: String,
      },
    },
  ],
  date: {
    type: Date,
    default: Date.now,
  },
});

export const User = mongoose.model<IUser>('user', UserSchema);
