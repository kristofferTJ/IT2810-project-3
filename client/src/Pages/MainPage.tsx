import React from "react";
import Header from "../components/Header/Header";
import Filtermenu from "../components/Filtermenu/Filtermenu";
import Restaurantcontainer from "../components/Restaurantcontainer/Restaurantcontainer";
import "../App.css";

function MainPage() {
  return (
    <div className="App">
    <div className="App">
      <Header></Header>
      <div className="content">
          <Filtermenu></Filtermenu>
          <div className="container">
            <RestaurantList></RestaurantList>
            <Pagination></Pagination>
          </div>
      </div>
    </div>
    </div>
  );
}

export default MainPage;
