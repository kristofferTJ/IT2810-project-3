import React from 'react';
import { Link } from 'react-router-dom';
import Header from "../components/Header/Header";
import Slides from "../components/Slides/Slides";
import "./StartPage.css";

function StartPage() {
  return (
    <div >
      <Header></Header>
      <Slides></Slides>
      <div className="center-box">
      <Link to="/restaurants"><a id="discover-button" className="waves-effect waves-light btn center #00b8d4 cyan accent-4"><i className="material-icons right">keyboard_arrow_right</i>Discover restaurants</a></Link>
      </div>
    </div>
  )
}

export default StartPage

