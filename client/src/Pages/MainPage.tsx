import React from "react";
import Header from "../components/Header/Header";
import Filtermenu from "../components/Filtermenu/Filtermenu";
import "../App.css";
// import {RestaurantList} from '../components/RestaurantList/RestaurantList';
import Restaurants from '../components/RestaurantList/Restaurants';
import Pagination from '../components/Pagination/Pagination';
import Searchbar from "../components/Searchbar/Searchbar";

function MainPage() {
  return (
    <div className="App">
    <div className="App">
      <Header></Header>
      <Searchbar></Searchbar>
      <div className="content">
          <Filtermenu></Filtermenu>
          <div className="container">
            {/* <RestaurantList></RestaurantList> */}
            <Restaurants></Restaurants>
            <Pagination></Pagination>
          </div>
      </div>
    </div>
    </div>
  );
}

export default MainPage;
