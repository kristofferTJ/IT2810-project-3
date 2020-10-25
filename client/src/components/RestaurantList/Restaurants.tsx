import React, { useEffect } from 'react';
import './Restaurants.css';
import { useDispatch, useSelector } from 'react-redux';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { RestaurantObject } from './RestaurantObject';

function Restaurants() {

    const restaurant = useSelector((state: any)  => state.restaurant)


    return(
        <section className="section section-icons gray lighten-4 center">
            <div className="container">
                <div className="restaurantlist">
                    <div className="row">
                    <div className="col s12 m6">
                    {restaurant?.map((restaurant: IRestaurant) => (
                        <RestaurantObject
                        key={restaurant._id}
                        restaurant={restaurant}
                        ></RestaurantObject>
                    ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Restaurants;
