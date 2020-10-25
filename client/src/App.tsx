import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import './App.css';
import RestaurantInfo from "./components/Restaurant page/RestaurantInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./store/ducks/restaurantDuck";


function App() {

  
  const dispatch = useDispatch()
  const restaurant = useSelector((state: any)  => state.restaurant)
  const regionFilter = useSelector((state: any)  => state.regionFilter)
  const cuisineFilter = useSelector((state: any)  => state.cuisineFilter)
  const priceFilter = useSelector((state: any)  => state.priceFilter)
  const search = useSelector((state: any)  => state.search)
  const sortBy = useSelector((state: any)  => state.sorting)


  useEffect(() => {
    dispatch(
        fetchRestaurants(0, regionFilter, cuisineFilter, priceFilter, search, sortBy.sortBy, sortBy.ascending)
    );
}, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy])

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/restaurant/:name" component={RestaurantInfo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
