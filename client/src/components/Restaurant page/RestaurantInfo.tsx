import React, { useEffect } from "react";
import "./RestaurantInfo.css";
import star from "../../images/star.svg";
import location from "../../images/location.svg";
import { IRestaurant } from "../../../../backend/models/Restaurant";
import Header from '../Header/Header';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';



function RestaurantInfo() {

  const name = useParams()  

  const restaurant: IRestaurant[] = useSelector((state: any)  => state.restaurant)

  console.log(JSON.stringify(restaurant))

  const riktig = restaurant.find((value:IRestaurant) => (value.name === JSON.stringify(name)))


  console.log("restaurant: " + riktig)


  console.log( JSON.stringify(name))

  
  const res = {
    name: "Olivia",
    stars: 2,
    region: "Norway",
    city: "Trondheim",
    cuisine: "Italian",
    price: 3,
    url: "https://oliviarestauranter.no/#!/home",
  };


  return (
    <div>
    <Header></Header>
    <div className="main">
      <h1>{res.name}</h1>
      {res.stars === 1 ? (
        <img src={star} width="30" height="30"></img>
      ) : (
        ""
      )}
      {res.stars === 2 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      {res.stars === 3 ? (
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
            {res.region}
          </div>
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {res.city}
          </div>
          <div className="attribute">
            <div className="font">Cuisine: </div>
            {res.cuisine}
          </div>
          <div className="attribute">
            <div className="font">Price: </div>
            {res.price === 1 ? <div>$</div> : ""}
            {res.price === 2 ? <div>$$</div> : ""}
            {res.price === 3 ? <div>$$$</div> : ""}
            {res.price === 4 ? <div>$$$$</div> : ""}
            {res.price === 5 ? <div>$$$$$</div> : ""}
          </div>
          <div className="attribute">
            <a href={res.url}>Hjemmeside</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default RestaurantInfo;
