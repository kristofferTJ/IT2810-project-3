import { combineReducers } from 'redux';
import restaurantDuck from './ducks/restaurantDuck';

const rootReducer = combineReducers({
    restaurant: restaurantDuck
});

export default rootReducer;