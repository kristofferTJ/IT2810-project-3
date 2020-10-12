import React from "react";
import "./RestaurantPage.css";
import star from "../../images/star.svg";

interface restaurant {
  name: string;
  stars: number;
  region: string;
  city: string;
  cuisine: string;
  price: number;
  url: string;
}

function RestaurantPage() {
  const restaurant: restaurant = {
    name: "Olivia",
    stars: 3,
    region: "Norway",
    city: "Trondheim",
    cuisine: "Italian",
    price: 2,
    url: "https://oliviarestauranter.no/#!/home",
  };

  return (
    <div className="main">
      <h1>{restaurant.name}</h1>
      {restaurant.stars === 1 ? (
        <img src={star} width="30" height="30"></img>
      ) : (
        ""
      )}
      {restaurant.stars === 2 ? (
        <div>
          <img src={star} width="30" height="30"></img>
          <img src={star} width="30" height="30"></img>
        </div>
      ) : (
        ""
      )}
      {restaurant.stars === 3 ? (
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
            <div className="font">Region: </div>
            {restaurant.region}
          </div>
          <div className="attribute">
            <div className="font">City: </div>
            {restaurant.city}
          </div>
          <div className="attribute">
            <div className="font">Cuisine: </div>
            {restaurant.cuisine}
          </div>
          <div className="attribute">
            <div className="font">Price: </div>
            {restaurant.price}
          </div>
          <div className="attribute">
            <a href={restaurant.url}>Hjemmeside</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantPage;
