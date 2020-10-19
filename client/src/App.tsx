import React from 'react';
import Header from './components/Header/Header';
import Filtermenu from './components/Filtermenu/Filtermenu';
import RestaurantList from './components/RestaurantList/RestaurantList';
import Pagination from './components/Pagination/Pagination';
import './App.css';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
          <Filtermenu></Filtermenu>
          <div className="container">
            <RestaurantList></RestaurantList>
            <Pagination></Pagination>
          </div>
      </div>
    </div>
  );
}

export default App;
