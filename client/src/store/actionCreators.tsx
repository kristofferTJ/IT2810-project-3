import * as actionTypes from "./actionType";

export function addReview(review: Review) {
  const action: ReviewAction = {
    type: actionTypes.ADD_REVIEW,
    review,
  };
  return simulateHttpRequest(action);

}

export function simulateHttpRequest(action: ReviewAction) {
  return (dispatch: DispatchType) => {
    setTimeout(() => {
      dispatch(action);
    }, 500);
  };
}