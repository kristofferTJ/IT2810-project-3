import React, { useEffect } from 'react';
import './Filtermenu.css';
import M from 'materialize-css';
import { updateRegionFilter } from '../../store/ducks/regionFilterDuck';
import { useDispatch } from 'react-redux';
import { updateCuisineFilter } from '../../store/ducks/cuisineFilterDuck';
import { updatePriceFilter } from '../../store/ducks/priceFilterDuck';


export default function Filtermenu() {

    //function for making the filtermenu collapsible
    useEffect(() => {
        const open = () => {
            var elems = document.querySelectorAll('.collapsible.expandable');
            var instances = M.Collapsible.init(elems, {accordion: false});;   

    }
        open();
    }, [])

    const dispatch = useDispatch();

    //collapisple filtermenu
    return(
        <div className="filtermenu">
            <ul className="collapsible expandable">
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">map</i>
                    Region
                    <i className="material-icons">arrow_drop_down</i>
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
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("Denmark"))}/>
                            <span>Denmark</span>
                        </label>
                        </p>
                        <p></p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("New York City"))}/>
                            <span>New York</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("Norway"))}/>
                            <span>Norway</span>
                        </label>
                        </p>
                        <p></p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateRegionFilter("Sweden"))}/>
                            <span>Sweden</span>
                        </label>
                        </p>
                        <p></p>
                    </form>    
                    </p>
                    </div>
                </li>
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">restaurant</i>
                    Cuisine
                    <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <div className="collapsible-body"><p>
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("American"))}/>
                            <span>American</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Asian"))}/>
                            <span>Asian</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Italian"))}/>
                            <span>Italian</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Indian"))}/>
                            <span>Indian</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Japanese"))}/>
                            <span>Japanese</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Korean"))}/>
                            <span>Korean</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updateCuisineFilter("Vegetarian"))}/>
                            <span>Vegetarian</span>
                        </label>
                        </p>
                    </form> 
                    </p></div>
                </li>
                <li>
                    <div className="collapsible-header">
                    <i className="material-icons">monetization_on</i>
                    Price
                    <i className="material-icons">arrow_drop_down</i>
                    </div>
                    <div className="collapsible-body"><p>
                    <form action="#">
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updatePriceFilter("$"))}/>
                            <span>$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updatePriceFilter("$$"))}/>
                            <span>$$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updatePriceFilter("$$$"))}/>
                            <span>$$$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updatePriceFilter("$$$$"))}/>
                            <span>$$$$</span>
                        </label>
                        </p>
                        <p>
                        <label>
                            <input type="checkbox" className="filled-in" onChange={() => dispatch(updatePriceFilter("$$$$$"))}/>
                            <span>$$$$$</span>
                        </label>
                        </p>
                    </form> 
                    </p></div>
                </li>
            </ul>
        </div>
        );
    }


