import { IRestaurant } from '../../../../backend/models/Restaurant';
import axios from 'axios';

// Types

export type RestaurantAction = {
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

export function fetchRestaurants(
  skip: 0,
  regionFilter: [],
  cuisineFilter: [],
  priceFilter: [],
  search: '',
  sortBy: '',
  ascending: true
) {
  const searchString = search ? `&name=${search}` : '';
  const sortString = sortBy ? `&sort=${sortBy}` : '';
  const ascendingString = ascending ? '' : 'DESC';
  let regionString = '';
  for (let x = 0; x < regionFilter.length; x++) {
    regionString += `&region${x === 0 ? '' : x}=${regionFilter[x]}`;
  }
  let cuisineString = '';
  for (let x = 0; x < cuisineFilter.length; x++) {
    cuisineString += `&cuisine${x === 0 ? '' : x}=${cuisineFilter[x]}`;
  }
  let priceString = '';
  for (let x = 0; x < priceFilter.length; x++) {
    priceString += `&price${x === 0 ? '' : x}=${priceFilter[x]}`;
  }

  return (dispatch: Function) =>
    axios
      .get(
        `http://localhost:8000/api/restaurant/filter/?skip=${
          skip  + cuisineString + priceString + regionString + searchString + sortString + ascendingString}`
      )
      .then((response) => dispatch(fetchRestaurantsSuccess(response)))
      .catch((err) => dispatch(fetchRestaurantsFailure));
}