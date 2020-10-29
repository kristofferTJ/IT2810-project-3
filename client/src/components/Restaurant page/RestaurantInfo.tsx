import React, { useEffect, useState } from "react";
import "./RestaurantInfo.css";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import history from '../../history';
import { breakStatement, isBreakStatement } from "@babel/types";

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



   let image_path: string = 'Default';  

  //   try {  
  //       image_path = require('../../images/'+restaurant.cuisine+'.jpg') 
     
  //     }
  //   catch(err){  
  //      image_path = require('../../images/Default.jpg');  //set default image path
  //  }

   const restaurantnames: string[] = [
     "American", "Asian", "Classic cuisine", "Contemporary", 
     "Creative", "European contemporary", "Indian", "Italian", "Japanese",
     "Korean", "Market cuisine", "Modern cuisine", "Vegetarian"
   ]
   

  return (
    <div>
        <div className="section">
        <a onClick={() => history.push('/restaurants')}><i className="material-icons medium left">navigate_before</i></a>
          {restaurant?.map((restaurant: IRestaurant) => (
            <div className="container">
                <h3 className="center">{restaurant!.name}</h3>
                <div className="restaurantcontainer">
                <div className="restaurantbox"> 
                  <div className="restaurant-image">
                    {restaurantnames.map((name: string) => (
                      image_path==="Default" ? (name===restaurant.cuisine ? image_path=name : "") : ""
                    ))}
                  <img src={require('../../images/'+image_path+'.jpg')}
                      alt="Italian"
                      width="250" 
                      style={{ marginTop: 10}}></img> 
                  </div> 
                  <div>
                    <p className="bold">{restaurant.cuisine}</p>
                    <p><i className="material-icons">star</i>
                  {restaurant.stars>= 2 && <i className="material-icons">star</i>}
                  {restaurant.stars>= 3 && <i className="material-icons">star</i>}</p>
                  <p className="bold">Price: {restaurant.price}</p>
                    <i className="material-icons">location_on</i><span>{restaurant.city}</span><span>, </span>
                    <span>{restaurant.region}</span>
                  </div>
                    </div>
                      <div className="divider"></div>
                      <div className="info-box">
                        <h6 className="bold">Additional information:</h6>
                        
                        <p>This restaurant got an michelin star in the year: {restaurant.year}</p>
                        <a href={restaurant!.url}>Visit website</a>
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
