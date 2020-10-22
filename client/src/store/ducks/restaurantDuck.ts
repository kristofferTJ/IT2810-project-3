import { IRestaurant } from '../../../../backend/models/Restaurant';
import axios from 'axios';

// Types

type RestaurantAction = {
  type: string;
  payload: IRestaurant[];
};

// Actions

const GET_RESTAURANTS_SUCCESS = 'GET_RESTAURANTS_SUCCESS';
const GET_RESTAURANTS_FAILURE = 'GET_RESTAURANTS_FAILURE';

//Reducer

export default function restaurantReducer(
  state: IRestaurant[] = [],
  action: RestaurantAction
) {
  switch (action.type) {
    case GET_RESTAURANTS_SUCCESS:
      return [...action.payload];
    case GET_RESTAURANTS_FAILURE:
      console.log(
        'Restaurants loading error, check if backend is connected properly'
      );
      return state;
    default:
      return state;
  }
}

// Action creators
export function fetchRestaurantsSuccess(response: any) {
  return {
    type: GET_RESTAURANTS_SUCCESS,
    payload: response.data,
  };
}

export function fetchRestaurantsFailure() {
  return {
    type: GET_RESTAURANTS_FAILURE,
  };
}

export function fetchRestaurants() {
  return (dispatch: any) =>
    axios
      .get('http://localhost:8000/api/restaurant/')
      .then((response) => dispatch(fetchRestaurantsSuccess(response)))
      .catch((err) => dispatch(fetchRestaurantsFailure));
}
