import React from 'react';
import './Restaurants.css';
import {IRestaurant} from '../../../../backend/models/Restaurant';
import { Link } from 'react-router-dom';


type Props = {
  restaurant: IRestaurant
}

export const RestaurantObject: React.FC<Props> = ({ restaurant }) => {

  let image_path: string = '';  
  
  try {  
      image_path = require('../../images/'+restaurant.cuisine+'.jpg'); 
      } 
  catch(err){  
      image_path = require('../../images/Default.jpg');  //setter default image path
  }

  return(
    <div className="card">
        <div className="card-image">
          <img src={image_path}
              alt="Italian"
              style={{ marginTop: 10 }}></img> 
          </div>
          <div className="card-content">
            <span className="card-title"><Link to={{pathname:"/restaurant/"+restaurant.name}}>{restaurant.name}</Link></span>
            <div className="card-action">
              <p className="bold">{restaurant.cuisine}</p><p className="bold">{restaurant.price}</p>
              <i className="material-icons">location_on</i><span>{restaurant.city}</span><span>, </span>
              <span>{restaurant.region}</span>
            </div>
        </div>
    </div>
  
  )
}
