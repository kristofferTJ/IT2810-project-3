import * as actionTypes from "./actionType";

export function addReview(review: Review) {
  const action: ReviewAction = {
    type: actionTypes.ADD_REVIEW,
    review,
  };
  return simulateHttpRequest(action);

}

export function getRestaurants(){
  return {
    type: "GET_RESTAURANTS"
  } as const;
}

export function simulateHttpRequest(action: ReviewAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}

export type Actions = ReturnType<typeof getRestaurants>;