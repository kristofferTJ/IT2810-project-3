import React, { useEffect } from "react";
import { Router as Router, Route, Switch } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import './App.css';
import RestaurantInfo from "./components/Restaurant page/RestaurantInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./store/ducks/restaurantDuck";
import history from './history';
import LoginPage from "./Pages/LoginPage";
import RestaurantPage from "./Pages/RestaurantPage";


function App() {

  
  const dispatch = useDispatch()
  const regionFilter = useSelector((state: any)  => state.regionFilter)
  const cuisineFilter = useSelector((state: any)  => state.cuisineFilter)
  const priceFilter = useSelector((state: any)  => state.priceFilter)
  const search = useSelector((state: any)  => state.search)
  const sortBy = useSelector((state: any)  => state.sorting)
  const skip = useSelector((state: any) => state.skip)

 
  useEffect(() => {
    dispatch(
        fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
    );
}, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])

  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/Restaurants" component={MainPage}></Route>
        <Route exact path="/" component={StartPage}></Route>
        <Route exact path="/restaurant/:name" component={RestaurantPage}></Route>
        <Route exact path="/login" component={LoginPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
