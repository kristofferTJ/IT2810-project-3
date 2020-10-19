import React from 'react';
import Header from './components/Header/Header';
import Filtermenu from './components/Filtermenu/Filtermenu';
import Restaurantcontainer from './components/Restaurantcontainer/Restaurantcontainer';
import './App.css';
import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import {Review} from './components/Review/Review';
import {Dispatch} from 'redux';
import { addReview } from './store/actionCreators';
import { AddReview } from './components/Add review/addReview';

function App() {
  const reviews: readonly Review[] = useSelector(
    (state: any) => state.reviews.reviews,
    shallowEqual
  )

  console.log("reviews: " + JSON.stringify(reviews))

  const dispatch: Dispatch<any> = useDispatch()

  const saveReview = React.useCallback(
    (review: Review) => dispatch(addReview(review)),
    [dispatch],
  )
  return (
    <div className="App">
      <Header></Header>
      <AddReview saveReview={saveReview}></AddReview>
      {reviews?.map((review: Review) => (
        <Review
        key={review.id}
        review={review}
        ></Review>
      ))}

      {/* <div className="content">
          <Filtermenu></Filtermenu>
          <Restaurantcontainer></Restaurantcontainer>
      </div> */}
    </div>
  );
}

export default App;
