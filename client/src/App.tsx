import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import Header from './components/Header/Header';
import Filtermenu from './components/Filtermenu/Filtermenu';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Pagination from './components/Pagination/Pagination';
import './App.css';


function App() {
  return (
    <Router>
      <switch>
        <Route exact path="/" component={StartPage}></Route>
        <Route exact path="/restaurants" component={MainPage}></Route>
        <Route exact path="/restaurant" component={RestaurantPage}></Route>
      </switch>
    </Router>
  );
}

export default App;
