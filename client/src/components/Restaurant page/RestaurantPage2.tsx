import React from "react";
import "./RestaurantPage.css";
import star from "../../images/star.svg";
import location from "../../images/location.svg";

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
    stars: 2,
    region: "Norway",
    city: "Trondheim",
    cuisine: "Italian",
    price: 3,
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
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant.region}
          </div>
          <div className="attribute">
            <div className="font">
              <img src={location} width="20px" height="20px"></img>
            </div>
            {restaurant.city}
          </div>
          <div className="attribute">
            <div className="font">Cuisine: </div>
            {restaurant.cuisine}
          </div>
          <div className="attribute">
            <div className="font">Price: </div>
            {restaurant.price === 1 ? <div>$</div> : ""}
            {restaurant.price === 2 ? <div>$$</div> : ""}
            {restaurant.price === 3 ? <div>$$$</div> : ""}
            {restaurant.price === 4 ? <div>$$$$</div> : ""}
            {restaurant.price === 5 ? <div>$$$$$</div> : ""}
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
