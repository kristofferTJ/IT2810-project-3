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

type DispatchType = (args: ReviewAction) => ReviewAction;

type IRestaurant = types.IRestaurant;

// interface IRestaurant{
//   name: string;
//   year: Number;
//   latitude: Number;
//   longitude: Number;
//   city: string;
//   region: string;
//   zipCode: Number;
//   cuisine: string;
//   price: string;
//   url: string;
// };

type RestaurantsAction = {
  type: string;
  payload: IRestaurant[];
};

export interface IRestaurantList {
  restaurant: {
    restaurants: IRestaurant[];
  };
  getRestaurants(): void;
};

export interface IRestaurantReduxProps {
  restaurant: {
    restaurants: IRestaurant[];
  }
};

type RestaurantState = {
  restaurants: IRestaurant[];
  loading: boolean;
};
