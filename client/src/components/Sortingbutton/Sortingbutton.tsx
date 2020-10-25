import React, {useEffect} from 'react'
import './Sortingbutton.css';

function Sortingbutton() {

    useEffect(() => {
        const dropdown = () => {
            var elems = document.querySelectorAll('.dropdown-trigger');
            var instances = M.Dropdown.init(elems, {});    
    }
        dropdown();
    }, [])

    return (
        <div>
            <a id="sorting-button" className='dropdown-trigger btn #00b8d4 cyan accent-4' href='#' data-target='dropdown1'>Sort 
            <i className="material-icons">arrow_drop_down</i></a>
            <ul id='dropdown1' className='dropdown-content'>
                <li><a href="#!">Name</a></li>
                <li><a href="#!">Price</a></li>
                <li><a href="#!">Stars</a></li>
            </ul>     
        </div>
    )
}

export default Sortingbutton


