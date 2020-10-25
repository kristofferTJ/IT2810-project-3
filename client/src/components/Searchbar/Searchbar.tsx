import React from 'react'
import './Searchbar.css';

function Searchbar() {
    return (
        <div className="input-field">
            <div className="Search-input">
                <input id="search-input" placeholder="Search" type="text" className="white" aria-label="Search box">
                </input>
                </div>
            <div>
            <a id="search-button" className="waves-effect waves-light btn #ffc107 amber"><i className="material-icons search-icon">search</i></a>
            </div>
        </div>
       
    )
}

export default Searchbar
