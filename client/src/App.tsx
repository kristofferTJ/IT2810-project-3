import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import Header from './components/Header/Header';
import Filtermenu from './components/Filtermenu/Filtermenu';
import Pagination from './components/Pagination/Pagination';
import './App.css';


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={StartPage}></Route>
        <Route exact path="/restaurants" component={MainPage}></Route>
        <Route exact path="/restaurant" component={RestaurantPage}></Route>
      </Switch>
    </Router>
  );
}

export default App;
