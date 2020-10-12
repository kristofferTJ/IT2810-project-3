import React from 'react';
import './Restaurantcontainer.css';
import Listobject from '../Listobject/Listobject';
import 'public/user.svg';

export default function Restaurantholder() {
    return(
        <div className="list">
            <Listobject></Listobject>
        </div>
    )
}