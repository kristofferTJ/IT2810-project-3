import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import RestaurantPage from "./Pages/RestaurantPage";
import MainPage from "./Pages/MainPage";
import StartPage from "./Pages/StartPage";
import './App.css';
import RestaurantInfo from "./components/Restaurant page/RestaurantInfo";


function App() {

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
