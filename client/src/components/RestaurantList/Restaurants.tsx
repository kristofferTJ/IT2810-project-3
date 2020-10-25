import React, { useEffect } from 'react';
import './RestaurantObject.css';
import { useDispatch, useSelector } from 'react-redux';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { RestaurantObject } from './RestaurantObject';

function Restaurants() {

    const restaurant = useSelector((state: any)  => state.restaurant)


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
