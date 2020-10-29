import React, {useEffect} from 'react'
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

    return (
        <div>
        <div className="input-field col s12">
            <select className="Sortingbutton" id="sortingButton" >
            <option value="" disabled selected>Sort on</option>
            <option value="1" onClick={() => dispatch(setSorting("name", true))}>Name</option>
            <option value="2" onClick={() => dispatch(setSorting("price", false))}>Price</option>
            <option value="3">Stars</option>
            </select>
            <label>Sorting</label>
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


