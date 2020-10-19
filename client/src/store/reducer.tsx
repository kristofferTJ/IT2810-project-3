import * as actionTypes from './actionType';
import {Actions} from './actionCreators';

const initialState: ReviewState = {
    reviews: [{
        id: 1,
        stars: 3,
        text: "dårlig",
        authorName: "Benedicte"
    }
    ]
}

let id: number = 1;

export const reviewReducer  = (
    state: ReviewState = initialState,
    action: ReviewAction
): ReviewState => {
    switch(action.type) {
        case actionTypes.ADD_REVIEW:
            const newReview: Review = {
                id: id,
                stars: action.review.stars,
                text: action.review.text,
                authorName: action.review.authorName
            }
            id+=1;
            return {
                ...state,
                reviews: state.reviews.concat(newReview)
            }
    }
    return state
}

function RestaurantReducer(state: IRestaurant[]=[], action: Actions){
    switch(action.type){
        case "GET_RESTAURANTS":         
    }
}