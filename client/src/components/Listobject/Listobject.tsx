import React from 'react';
import './Listobject.css';

export default function Listobject() {
    return(
        <div className="objectdiv">
            <div className="imagediv">
                image
            </div>
            <div className="info">
                <h2 >Restaurant name</h2>
                <div className="infodiv">
                    <p>Cuisine</p>
                    <p>Price</p>
                </div>
                <div>
                    <p>City</p>
                    <p>Region</p>
                </div>
            </div>
        </div>
    )
}