import React, { useEffect } from "react";
import { Router as Router, Route, Switch } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import './App.css';
import RestaurantInfo from "./components/Restaurant page/RestaurantInfo";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "./store/ducks/restaurantDuck";
import history from './history';


function App() {

  
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
    <Router history={history}>
      <Switch>
        <Route exact path="/Restaurants" component={MainPage}></Route>
        <Route exact path="/" component={StartPage}></Route>
        <Route exact path="/restaurant/:name" component={RestaurantInfo}></Route>
      </Switch>
    </Router>
  );
}

export default App;
