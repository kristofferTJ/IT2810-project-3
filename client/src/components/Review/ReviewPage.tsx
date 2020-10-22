import React from 'react';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {Review} from '../../components/Review/Review';
import {Dispatch} from 'redux';
// import { addReview } from '../../store/actionCreators';
import { AddReview } from '../../components/Review/addReview';
import * as types from '../../type';

function ReviewPage() {
  const reviews: readonly types.Review[] = useSelector(
    (state: any) => state.reviews.reviews,
    shallowEqual
  )

  console.log("reviews: " + JSON.stringify(reviews))

  const dispatch: Dispatch<any> = useDispatch()

  // const saveReview = React.useCallback(
  //   (review: types.Review) => dispatch(addReview(review)),
  //   [dispatch],
  // )
  return (
    <div>
      {/* <AddReview saveReview={saveReview}></AddReview> */}
      {reviews?.map((review: types.Review) => (
        <Review
        key={review.id}
        review={review}
        ></Review>
      ))}
    </div>
  );
}

export default ReviewPage;
