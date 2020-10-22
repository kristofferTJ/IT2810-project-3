import React, { useEffect } from "react";
import Header from "../components/Header/Header";
import Filtermenu from "../components/Filtermenu/Filtermenu";
import "../App.css";
// import {RestaurantList} from '../components/RestaurantList/RestaurantList';
import Restaurants from '../components/RestaurantList/Restaurants';
import Pagination from '../components/Pagination/Pagination';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "../store/ducks/restaurantDuck";

function MainPage() {

  const dispatch = useDispatch()
  const restaurant = useSelector((state: any)  => state.restaurant)
  const filter = useSelector((state: any)  => state.filter)
  const search = useSelector((state: any)  => state.search)
  const sortBy = useSelector((state: any)  => state.sorting)


  useEffect(() => {
    dispatch(
        fetchRestaurants(0, filter, search, sortBy.sortBy, sortBy.ascending)
    );
}, [fetchRestaurants])


  return (
    <div className="App">
    <div className="App">
      <Header></Header>
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
