import React from 'react';
import './Header.css';
import 'public/user.svg';

export default function Header() {
    return(
        <header className='header'>
            <h1 className='title'>Foodfinder</h1>
            <div className="searchDiv">
                <input className='searchbar'
                placeholder='Search for restaurants . . .'
                >
                </input>
            </div>
            <div className="options">
                <div>
                    <h2 className="header_option">Favorites</h2>
                </div>
                <div className="profilediv">
                    <h2 className="header_option">My Site</h2>
                    
                </div>
            </div>
        </header>
    )
}