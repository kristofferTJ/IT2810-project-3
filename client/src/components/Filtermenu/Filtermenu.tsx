import React, { useState, useEffect, Component } from 'react';
import './Filtermenu.css';
import M from 'materialize-css';


export default function Filtermenu() {

    useEffect(() => {
        console.log('hei');
        const dropdown = () => {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});
          
    }
        dropdown();
    }, [])

    return(
        <div className="filtermenu">
            <a className="btn dropdown-trigger" href="#!" data-target="dropdown1">Region <i className="material-icons">map</i><i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">one<span className="badge">1</span></a></li>
                <li><a href="#!">two<span className="new badge">1</span></a></li>
                <li><a href="#!">three</a></li>
            </ul>
            <a className="btn dropdown-trigger" href="#!" data-target="dropdown2">Cuisine <i className="material-icons">local_dining</i><i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown2" className="dropdown-content">
                <li><a href="#!">Italian</a></li>
                <li><a href="#!">Asian</a></li>
                <li><a href="#!">t</a></li>
            </ul>
            <a className="btn dropdown-trigger" href="#!" data-target="dropdown3">Price <i className="material-icons">monetization_on</i><i className="material-icons right">arrow_drop_down</i></a>
            <ul id="dropdown3" className="dropdown-content">
                <li><a href="#!">Low<span className="badge">$</span></a></li>
                <li><a href="#!">Low-Medium<span className="badge">$$</span></a></li>
                <li><a href="#!">Medium<span className="badge">$$$</span></a></li>
            </ul>  
        </div> 
        );
    }


