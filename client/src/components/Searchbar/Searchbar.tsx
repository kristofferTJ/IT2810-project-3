import React from 'react'
import { useDispatch } from 'react-redux';
import { updateSearch } from '../../store/ducks/searchDuck';
import './Searchbar.css';

function Searchbar() {

    const dispatch = useDispatch();

    function changeText(text: string) {
        dispatch(updateSearch(text))
    }

    return (
        <div className="input-field">
            <div className="Search-input">
                <i className="material-icons search-icon prefix">search</i>
                <input id="icon_prefix" placeholder="Search" type="text" className="white" aria-label="Search box" onChange={e => changeText(e.target.value)}>
                </input>
                </div>
            <div>
    
            </div>
        </div>
       
    )
}

export default Searchbar
