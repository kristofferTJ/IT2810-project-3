import React, {useEffect, useState} from 'react'
import { useDispatch } from 'react-redux';
import { setSorting } from '../../store/ducks/sortingDuck';
import './Sortingbutton.css';

function Sortingbutton() {

    
    const dispatch = useDispatch();

    useEffect(() => {
        const dropdown = () => {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});    
    }
        dropdown();
    }, [])

    useEffect(() => {
        const dropdown = () => {
            var elems = document.querySelectorAll('select');
        var instances = M.FormSelect.init(elems, {});
    }
        dropdown();
    }, [])

    // let instance = M.FormSelect.getInstance(Sortingbutton);
    // console.log(instance.getSelectedValues)

    function updateSortingbutton(value: string){
        let ascending: boolean;
        value === "name" || value === "price" ? ascending=true : ascending=false;
        dispatch(setSorting(value, ascending))
    }


    return (
        <div>
        <div className="input-field col s12">
            <select value="" className="Sortingbutton" id="Sortingbutton" onChange={(e) => updateSortingbutton(e.target.value)}>
            <option value="name" selected>Name</option>
            <option value="price">Price</option>
            <option value="stars">Stars</option>
            </select>
            <label>Sort on</label>
        </div>
        {/* <div>
            <a id="sorting-button" className='dropdown-trigger btn #00b8d4 cyan accent-4' href='#' data-target='dropdown1'>Sort 
            <i className="material-icons">arrow_drop_down</i></a>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!" onClick={() => dispatch(setSorting("name", true))}>Name</a></li>
                <li><a href="#!" onClick={() => dispatch(setSorting("price", false))}>Price</a></li>
                <li><a href="#!" onClick={() => dispatch(setSorting("stars", false))}>Stars</a></li>
            </ul>     
        </div> */}
        </div>
    )
}

export default Sortingbutton


