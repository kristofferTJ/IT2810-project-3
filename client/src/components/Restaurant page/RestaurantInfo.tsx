import React, { useEffect, useState } from "react";
import "./RestaurantInfo.css";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import axios from 'axios';

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

  return (
    <div>
    <Header></Header>
    <div>
      {restaurant?.map((restaurant: IRestaurant) => (
      <h1>{restaurant.name}</h1>      
      ))}
    </div>
    </div>
  );
}

export default RestaurantInfo;
