import * as actipnTypes from './actionType';

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

const reducer  = (
    state: ReviewState = initialState,
    action: ReviewAction
): ReviewState => {
    switch(action.type) {
        case actipnTypes.ADD_REVIEW:
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

export default reducer
