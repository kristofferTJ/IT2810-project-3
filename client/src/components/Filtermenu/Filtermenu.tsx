import React from 'react';
import './Filtermenu.css';

export default function Filtermenu() {
    return(
        <div className="filtermenu">
            <div className="btn-group dropright">
                <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropright
                </button>
            <div className="dropdown-menu">
                    <a className="dropdown-item">Austria</a>
                    <a className="dropdown-item">California</a>
                    <a className="dropdown-item">Chicago</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Region</button>
                <div className="dropdown-content">
                    <a>Austria</a>
                    <a>California</a>
                    <a>Chicago</a>
                    
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Cuisine</button>
                <div className="dropdown-content">
                    <a href="#">Contemporary</a>
                    <a href="#">Californian</a>
                    <a href="#">Japanese</a>
                </div>
            </div>
            <div className="dropdown">
                <button className="dropbtn">Price</button>
                <div className="dropdown-content">
                    <a href="#">$$$$$</a>
                    <a href="#">$$$$</a>
                    <a href="#">$$$</a>
                    <a href="#">$$</a>
                    <a href="#">$</a>
                </div>
            </div>
        </div>
    )
}