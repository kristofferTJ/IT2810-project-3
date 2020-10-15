import mongoose, { Schema, model, Document, Model } from 'mongoose';

//name,year,latitude,longitude,city,region,zipCode,cuisine,price,url

export interface IRestaurant extends Document {
  name: string;
  year: Number;
  latitude: Number;
  longitude: Number;
  city: string;
  region: string;
  zipCode: Number;
  cuisine: string;
  price: string;
  url: string;
}

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  city: {
    type: String,
    required: true,
  },
  region: {
    type: String,
    require: true,
  },
  zipCode: {
    type: Number,
    required: true,
  },
  cuisine: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  url: {
    type: String,
  },
});

export const Restaurant = mongoose.model<IRestaurant>(
  'Restaurant',
  RestaurantSchema
);
