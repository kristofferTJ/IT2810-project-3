import React, { useEffect } from 'react';
import './RestaurantObject.css';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { RestaurantObject } from './RestaurantObject';

function Restaurants() {

    const dispatch = useDispatch();
    const restaurant = useSelector((state: any)  => state.restaurant)

    const restaurants: readonly IRestaurant[] = useSelector(
        (state: any) => state.restaurant,
        shallowEqual
      )
      
   useEffect(() => {
       dispatch(
           fetchRestaurants()
       );
   }, [fetchRestaurants])


    console.log("restaurants:"+JSON.stringify(restaurants))

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
