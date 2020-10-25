import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Filtermenu from "../components/Filtermenu/Filtermenu";
import "./MainPage.css";
// import {RestaurantList} from '../components/RestaurantList/RestaurantList';
import Restaurants from '../components/RestaurantList/Restaurants';
import Pagination from '../components/Pagination/Pagination';
import Searchbar from '../components/Searchbar/Searchbar';
import Sortingbutton from '../components/Sortingbutton/Sortingbutton';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/ducks/restaurantDuck";

function MainPage() {

  return (
    <div className="App">
      <Header></Header>
      <section id="search" className="section section-search #b2ebf2 cyan lighten-4">       
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5>Search restaurants:</h5>
                        <div id="search-field-input">
                          <div className="col s10 right"><Searchbar></Searchbar></div>
                          <div ><Sortingbutton></Sortingbutton></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      <div className="content">
          <Filtermenu></Filtermenu>
          <div className="container">
            {/* <RestaurantList></RestaurantList> */}
            <Restaurants></Restaurants>
            <Pagination></Pagination>
          </div>
      </div>
    </div>
  );
}

export default MainPage;
