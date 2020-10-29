import React from 'react';
import Header from "../components/Header/Header";
import Slides from "../components/Slides/Slides";
import Footer from "../components/Footer/Footer";
import history from "../history";
import "./StartPage.css";

function StartPage() {
  return (
    <div >
      <Header></Header>
      <Slides></Slides>
      <div className="center-box">
        <a id="discover-button" className="waves-effect waves-light btn center #00b8d4 cyan accent-4" 
        onClick={() => history.push('/Restaurants')}>
          <i className="material-icons right">keyboard_arrow_right</i>Discover restaurants</a>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default StartPage

