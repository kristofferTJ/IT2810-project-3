import React from 'react';
import './RestaurantObject.css';
import {IRestaurant} from '../../../../backend/models/Restaurant';
type Props = {
  restaurant: IRestaurant
}

export const RestaurantObject: React.FC<Props> = ({ restaurant }) => {
  return(
    <div className="post card">
    <div className="card-content">
    <span className="card-title">{restaurant.name}</span>
    <div className="card-action">
      <p>{restaurant.cuisine}</p><p>{restaurant.price}</p>
      <p>{restaurant.region} <i className="material-icons">location_on</i></p><p>{restaurant.city}</p>
    </div>
    </div>
  </div>
  )
}

  