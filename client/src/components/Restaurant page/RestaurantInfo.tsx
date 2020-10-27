import React, { useEffect, useState } from "react";
import "./RestaurantInfo.css";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import history from '../../history';

interface IParams {
  name: string;
}


function RestaurantInfo() {
 
  const [restaurant, setRestaurant] = useState<IRestaurant[]>();
  const params: IParams = useParams()  


  useEffect(() => {
      const getRestaurant = async() => {
        const api_URL = (`http://localhost:8000/api/restaurant/filter/?skip=0&name=${params.name}`);
        await axios.get(api_URL).then(response => {setRestaurant(response.data)})
      }
      getRestaurant();
  }, [])

  // let image_path: string = '';  
  
  // try {  
  //     image_path = require('../../images/'+restaurant.cuisine+'.jpg'); 
  //     } 
  // catch(err){  
  //     image_path = require('../../images/Default.jpg');  //set default image path
  // }

  return (
    <div>
        <div className="section">
          {restaurant?.map((restaurant: IRestaurant) => (
            <div className="container">
                  <a  onClick={() => history.push('/restaurants')}><i className="material-icons medium left">navigate_before</i></a>
                  <h3 className="center">{restaurant!.name}</h3>  
                <div className="divider"></div>
                <div>
                  <div className="card horizontal">
                    <div className="card-image">
                      <img src={'../../images/Default.jpg'}/>
                    </div>
                  <div className="card-stacked">
                    <div className="card-content">
                    <p className="bold">{restaurant.cuisine}</p><p className="bold">Price: {restaurant.price}</p>
                    <i className="material-icons">location_on</i><span>{restaurant.city}</span><span>, </span>
                    <span>{restaurant.region}</span>
                  <p><i className="material-icons">star</i>
                  {restaurant.stars>= 2 && <i className="material-icons">star</i>}
                  {restaurant.stars>= 2 && <i className="material-icons">star</i>}</p>
                      <div className="divider"></div>
                      <div className="info-box">
                        <p className="bold">Additional information:</p>
                        <p>This restaurant got an michelin star in the year: {restaurant.year}</p>
                      </div>
                    </div>
                    <div className="card-action">
                      <a href={restaurant!.url}>Website</a>
                    </div>
                    </div>
                  </div>
                </div>
            </div>
          ))}
          {restaurant?.length===0 ? <h2>ERROR: Can not fecth restaurant from database</h2> : ""}
        </div>
    </div>
  );
}

export default RestaurantInfo;
