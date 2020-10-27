import React from "react";
import RestaurantInfo from "../components/Restaurant page/RestaurantInfo";
import Header from "../components/Header/Header";
import Rating  from "../components/Review/Rating";
import Reviews  from "../components/Review/Reviews";

function RestaurantPage() {
  return (
    <div className="App">
      <Header></Header>
      <RestaurantInfo></RestaurantInfo>
      <Rating></Rating>
      <Reviews></Reviews>
    </div>
  );
}

export default RestaurantPage;
