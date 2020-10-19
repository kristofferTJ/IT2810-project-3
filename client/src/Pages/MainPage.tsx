import React from "react";
import Header from "../components/Header/Header";
import Filtermenu from "../components/Filtermenu/Filtermenu";
import "../App.css";
import RestaurantList from '../components/RestaurantList/RestaurantList';
import Pagination from '../components/Pagination/Pagination';

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
