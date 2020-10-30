import React, { useEffect } from 'react';
import './Restaurants.css';
import { useDispatch, useSelector } from 'react-redux';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { RestaurantObject } from './RestaurantObject';
import { sortingType } from '../../store/ducks/sortingDuck';
import { updateCounter } from '../../store/ducks/counterDuck';

export type stateType = {
    restaurant: IRestaurant[],
    regionFilter: string[],
    priceFilter: string[],
    cuisineFilter: string[],
    search: string,
    sorting: sortingType,
    skip: number,
    counter: number
}

function Restaurants() {


    const dispatch = useDispatch()
    const restaurant = useSelector((state: stateType)  => state.restaurant)
    const regionFilter = useSelector((state: stateType)  => state.regionFilter)
    const priceFilter = useSelector((state: stateType)  => state.priceFilter)
    const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
    const search = useSelector((state: stateType)  => state.search)
    const sortBy = useSelector((state: stateType)  => state.sorting)
    const skip = useSelector((state: stateType) => state.skip)

    useEffect(() => {
        dispatch(
            fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter , search, sortBy.sortBy, sortBy.ascending)
        );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])

    
    useEffect(() => {
        dispatch(
            updateCounter(regionFilter, cuisineFilter, priceFilter, search)
        );
    }, [updateCounter, regionFilter, cuisineFilter, priceFilter, search])

    return(
        <section className="section section-icons gray lighten-4 center">
            <div className="container">
                <div className="restaurantlist">
                    {restaurant?.map((restaurant: IRestaurant) => (
                        <RestaurantObject
                        key={restaurant._id}
                        restaurant={restaurant}
                        ></RestaurantObject>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Restaurants;
