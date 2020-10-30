import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import './App.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./store/ducks/restaurantDuck";
import { stateType } from "./components/RestaurantList/Restaurants";


function App() {
  
  const dispatch = useDispatch()
  const regionFilter = useSelector((state: stateType)  => state.regionFilter)
  const cuisineFilter = useSelector((state: stateType)  => state.cuisineFilter)
  const priceFilter = useSelector((state: stateType)  => state.priceFilter)
  const search = useSelector((state: stateType)  => state.search)
  const sortBy = useSelector((state: stateType)  => state.sorting)
  const skip = useSelector((state: stateType) => state.skip)
 
  useEffect(() => {
    dispatch(
        fetchRestaurants(skip, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
    );
}, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy, skip])

  return (
    <Router>
        <Switch>
        <Route exact path="/Restaurants" component={MainPage}></Route>
        <Route exact path="/" component={StartPage}></Route>
        <Route exact path="/restaurant/:name" component={RestaurantPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
