import React from 'react';
import Header from './components/Header/Header';
import Filtermenu from './components/Filtermenu/Filtermenu';
import Restaurantcontainer from './components/Restaurantcontainer/Restaurantcontainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="content">
          <Filtermenu></Filtermenu>
          <Restaurantcontainer></Restaurantcontainer>
      </div>
    </div>
  );
}

export default App;
