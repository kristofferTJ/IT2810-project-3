import React, { useEffect, useState } from "react";
import "./RestaurantInfo.css";
import star from "../../images/star.svg";
import location from "../../images/location.svg";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import axios from "axios";



function RestaurantInfo() {

  const name = useParams()  

  const n = {name}.name
  console.log(JSON.stringify(n))
  
  // const restaurant: IRestaurant[] = useSelector((state: any)  => state.restaurant)

  const [restaurant, setRestaurant] = useState<IRestaurant>();


  useEffect(() => {
    const getRestaurant  = async() => {
      const api_url = (`http://localhost:8000/api/restaurant/filter/?skip=${0 + `&name=`+ JSON.stringify(n)}`);
      await axios.get(api_url).then(response => setRestaurant(response.data.DATA))
    }
    getRestaurant()
    console.log(restaurant)
  })

  // const riktig = restaurant.find((value:IRestaurant) => (value.name === JSON.stringify(name)))


  
  // const res = {
  //   name: "Olivia",
  //   stars: 2,
  //   region: "Norway",
  //   city: "Trondheim",
  //   cuisine: "Italian",
  //   price: 3,
  //   url: "https://oliviarestauranter.no/#!/home",
  // };


  return (
    <div>
    <Header></Header>
    <div className="main">
      <h1>{restaurant!.name}</h1>
      {restaurant!.stars === 1 ? (
        <img src={star} width="30" height="30"></img>
      ) : (
        ""
      )}
      {restaurant!.stars === 2 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      {restaurant!.stars === 3 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      <div className="content">
        <div className="picture">
          <img
            src={require("../../images/Italian.jpg")}
            alt="Italian"
            style={{ marginTop: 10 }}
          ></img>
        </div>
        <div className="info">
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant!.region}
          </div>
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant!.city}
          </div>
          <div className="attribute">
            <div className="font">Cuisine: </div>
            {restaurant!.cuisine}
          </div>
          <div className="attribute">
            <div className="font">Price: </div>
            {restaurant!.price}
          </div>
          <div className="attribute">
            <a href={restaurant!.url}>Hjemmeside</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RestaurantInfo;
