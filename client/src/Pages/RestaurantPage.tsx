import React from "react";
import RestaurantInfo from "../components/RestaurantInfo/RestaurantInfo";
import Header from "../components/Header/Header";
import Reviews  from "../components/Review/Reviews";
import Footer from "../components/Footer/Footer";


function RestaurantPage() {
  
  return (
    <div className="App">
      <Header></Header>
      <RestaurantInfo></RestaurantInfo>
      <Reviews></Reviews>
      <Footer></Footer>
    </div>
  );
}

export default RestaurantPage;
