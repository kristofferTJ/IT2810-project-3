import * as types from '../../backend/models/Restaurant';

export interface Review {
  id: number;
  stars: number;
  text: string;
  authorName: string;
}

type ReviewState = {
  reviews: Review[];
};

type ReviewAction = {
  type: string;
  review: Review;
};
