import React, { useState, useEffect, Component } from 'react';
import './Filtermenu.css';
import M from 'materialize-css';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';


export default function Filtermenu() {

    useEffect(() => {
        const dropdown = () => {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});    
    }
        dropdown();
    }, [])

    useEffect(() => {
        const open = () => {
            var elems = document.querySelectorAll('.collapsible.expandable');
            var instances = M.Collapsible.init(elems, {accordion: false});;   

    }
        open();
    }, [])

    const dispatch = useDispatch();

    return(
        <div className="filtermenu">
            <ul className="collapsible expandable">
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">map</i>
                    Region
                    </div>
                    <div className="collapsible-body"><p>
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("Austria"))}/>
                            <span>Austria</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("California"))}/>
                            <span>California</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("Chicago"))}/>
                            <span>Chicago</span>
                        </label>
                        </p>
                    </form>    
                    </p>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">local_dining</i>
                    Cuisine
                    </div>
                    <div className="collapsible-body"><p>
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Asian</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Italian</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>Japanese</span>
                        </label>
                        </p>
                    </form> 
                    </p></div>
                </li>
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">monetization_on</i>
                    Price
                    </div>
                    <div className="collapsible-body"><p>
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>$$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in"/>
                            <span>$$$</span>
                        </label>
                        </p>
                    </form> 
                    </p></div>
                </li>
            </ul>
        </div>
        );
    }


