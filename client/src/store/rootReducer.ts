import { combineReducers } from 'redux';
import restaurantDuck from './ducks/restaurantDuck';
import cuisineFilterDuck from './ducks/cuisineFilterDuck';
import priceFilterDuck from './ducks/priceFilterDuck';
import regionFilterDuck from './ducks/regionFilterDuck';
import searchDuck from './ducks/searchDuck';
import sortingDuck from './ducks/sortingDuck';

const rootReducer = combineReducers({
    restaurant: restaurantDuck,
    regionFilter: regionFilterDuck,
    priceFilter: priceFilterDuck,
    cuisineFilter: cuisineFilterDuck,
    search: searchDuck,
    sorting: sortingDuck
});

export default rootReducer;