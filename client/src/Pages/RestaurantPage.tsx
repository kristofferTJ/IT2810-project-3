import React from "react";
import RestaurantInfo from "../components/Restaurant page/RestaurantInfo";
import Header from "../components/Header/Header";

function RestaurantPage() {
  return (
    <div className="App">
      <Header></Header>
      <RestaurantInfo></RestaurantInfo>
    </div>
  );
}

export default RestaurantPage;
