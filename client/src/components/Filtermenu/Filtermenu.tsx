import React, { useState } from 'react';
import './Filtermenu.css';


export default function Filtermenu() {


    return(
       <div className="filtermenu">
           <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">one<span className="badge">1</span></a></li>
                <li><a href="#!">two<span className="new badge">1</span></a></li>
                <li><a href="#!">three</a></li>
            </ul>
        <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">Dropdown<i className="material-icons right">arrow_drop_down</i></a>
       </div> 
    )
}