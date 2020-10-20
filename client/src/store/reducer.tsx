import * as actionTypes from './actionType';
import * as types from '../type';


const initialState: types.ReviewState = {
    reviews: [{
        id: 1,
        stars: 3,
        text: "dårlig",
        authorName: "Benedicte"
    }
    ]
}

const initialStateRestaurant: types.RestaurantState = {
    restaurants: [],
    loading: false
}

let id: number = 1;

export const reviewReducer  = (
    state: types.ReviewState = initialState,
    action: types.ReviewAction
): types.ReviewState => {
    switch(action.type) {
        case actionTypes.ADD_REVIEW:
            const newReview: types.Review = {
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

export default function RestaurantReducer(state: types.RestaurantState = initialStateRestaurant , action: types.RestaurantsAction){
    switch(action.type){
        case actionTypes.GET_RESTAURANTS: 
            return {
                ...state,
                restaurants: action.payload,
                loading: false
            };
        case "ITEMS_LOADING":
            return {
                ...state,
                loading: true
            };
        default:
            return state;
    }

}