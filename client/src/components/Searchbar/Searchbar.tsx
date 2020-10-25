import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRestaurants } from '../../store/ducks/restaurantDuck';
import { updateSearch } from '../../store/ducks/searchDuck';
import './Searchbar.css';

function Searchbar() {

    const dispatch = useDispatch();
    const regionFilter = useSelector((state: any)  => state.regionFilter)
    const priceFilter = useSelector((state: any)  => state.priceFilter)
    const cuisineFilter = useSelector((state: any)  => state.cuisineFilter)
    const search = useSelector((state: any)  => state.search)
    const sortBy = useSelector((state: any)  => state.sorting)


    useEffect(() => {
        dispatch(
            fetchRestaurants(0, regionFilter, cuisineFilter, priceFilter , search, sortBy.sortBy, sortBy.ascending)
        );
    }, [fetchRestaurants, regionFilter, cuisineFilter, priceFilter, search, sortBy])

    function changeText(text: string) {
        dispatch(updateSearch(text))
    }

    return (
        <div className="input-field">
            <div className="Search-input">
                <input id="search-input" placeholder="Search" type="text" className="white" aria-label="Search box" onChange={e => changeText(e.target.value)}>
                </input>
                </div>
            <div>
            <a id="search-button" className="waves-effect waves-light btn #ffc107 amber"><i className="material-icons search-icon">search</i></a>
            </div>
        </div>
       
    )
}

export default Searchbar
