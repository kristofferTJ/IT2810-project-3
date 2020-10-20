import axios from "axios";
import * as actionTypes from "./actionType";
import * as types from '../type';

export function addReview(review: types.Review) {
  const action: types.ReviewAction = {
    type: actionTypes.ADD_REVIEW,
    review,
  };
  return simulateHttpRequest(action);

}

export const getRestaurants = () => (dispatch: Function) => {
  dispatch(setItemsLoading());
  axios.get('http://localhost:8000/api/restaurant/').then(res => 
    dispatch({
      type: actionTypes.GET_RESTAURANTS,
      payload: res.data
    }
    )
  )
}

export const setItemsLoading = () => {
  return {
    type: "ITEMS_LOADING"
  }
}

export function simulateHttpRequest(action: types.ReviewAction) {
  return (dispatch: types.DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

// export type Actions = ReturnType<typeof getRestaurants>;