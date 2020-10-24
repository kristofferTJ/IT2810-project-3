import mongoose, { Schema, Document, Types } from 'mongoose';

//name,year,latitude,longitude,city,region,zipCode,cuisine,price,url

export interface IRating extends Document {
  user: Types.ObjectId;
  rating: Number;
}

export interface IComment extends Document {
  user: Types.ObjectId;
  comment: String;
}

export interface IRestaurant extends Document {
  name: string;
  year: Number;
  latitude: Number;
  longitude: Number;
  city: string;
  region: string;
  zipCode: Number | String;
  cuisine: any;
  price: string;
  url: string;
  stars: Number;
  ratings: IRating[];
  comments: IComment[];
}

const RestaurantSchema = new Schema({
  name: {
    type: String,
  },
  year: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  city: {
    type: String,
  },
  region: {
    type: String,
  },
  zipCode: {
    type: String,
    content: Schema.Types.Mixed,
  },
  cuisine: {
    type: String,
  },
  price: {
    type: String,
  },
  url: {
    type: String,
  },
  stars: {
    type: Number,
  },
  ratings: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'user',
      },
      rating: {
        type: Number,
      },
    },
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
      },
      comment: {
        type: String,
      },
    },
  ],
});

export const Restaurant = mongoose.model<IRestaurant>(
  'Restaurant',
  RestaurantSchema
);
