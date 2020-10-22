import { combineReducers } from 'redux';
import restaurantDuck from './ducks/restaurantDuck';
import filterDuck from './ducks/filterDuck';
import searchDuck from './ducks/searchDuck';
import sortingDuck from './ducks/sortingDuck';

const rootReducer = combineReducers({
    restaurant: restaurantDuck,
    filter: filterDuck,
    search: searchDuck,
    sorting: sortingDuck
});

export default rootReducer;