import React, { useEffect } from 'react';
import './RestaurantObject.css';
import { useDispatch, useSelector } from 'react-redux';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { RestaurantObject } from './RestaurantObject';

function Restaurants() {


    const dispatch = useDispatch()
    const restaurant = useSelector((state: any)  => state.restaurant)
    const regionFilter = useSelector((state: any)  => state.regionFilter)
    const priceFilter = useSelector((state: any)  => state.priceFilter)
    const cuisineFilter = useSelector((state: any)  => state.cuisineFilter)
    const search = useSelector((state: any)  => state.search)
    const sortBy = useSelector((state: any)  => state.sorting)


    useEffect(() => {
        dispatch(
            fetchRestaurants(0, regionFilter, cuisineFilter, priceFilter , search, sortBy.sortBy, sortBy.ascending)
        );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy])



    return(
        <div>
            {restaurant?.map((restaurant: IRestaurant) => (
                <RestaurantObject
                key={restaurant._id}
                restaurant={restaurant}
                ></RestaurantObject>
            ))}
        </div>
    )
}

export default Restaurants;
