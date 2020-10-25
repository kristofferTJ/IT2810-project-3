import React from 'react';
import './Header.css';

export default function Header() {
    return(    
        <nav>
        <div className="nav-wrapper #4dd0e1 cyan lighten-2">
            <a href="#" className="brand-logo center">Restaurantfinder</a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
            </ul>
        </div>
        </nav>
    )
}