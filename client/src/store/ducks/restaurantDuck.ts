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
  filters: [],
  search: '',
  sortBy: '',
  ascending: true
) {
  const searchString = search ? `&name=${search}` : '';
  const sortString = sortBy ? `&sort=${sortBy}` : '';
  const ascendingString = ascending ? '' : 'DESC';
  let filterString = '';
  for (let x = 0; x < filters.length; x++) {
    filterString += `&type${x === 0 ? '' : x}=${filters[x]}`;
  }

  return (dispatch: Function) =>
    axios
      .get(
        `http://localhost:8000/api/restaurant/?skip=${
          skip + filterString + searchString + sortString + ascendingString
        }`
      )
      .then((response) => dispatch(fetchRestaurantsSuccess(response)))
      .catch((err) => dispatch(fetchRestaurantsFailure));
}
