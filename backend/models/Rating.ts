import mongoose, { Schema, model, Document, Model } from 'mongoose';

//name,year,latitude,longitude,city,region,zipCode,cuisine,price,url

export interface IRating extends Document {
  rating: Number;
  comment: string;
}

const RatingSchema = new Schema({
  rating: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
  },
});

export const Rating = mongoose.model<IRating>('rating', RatingSchema);
