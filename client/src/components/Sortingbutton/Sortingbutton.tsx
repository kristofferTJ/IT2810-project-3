import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { setSorting } from '../../store/ducks/sortingDuck';
import './Sortingbutton.css';

function Sortingbutton() {

    
    const dispatch = useDispatch();

    //Function for dropdown in sortingbutton
    useEffect(() => {
        const dropdown = () => {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, {});
    }
        dropdown();
    }, [])

    //Gets value to sort on
    function updateSortingbutton(value: string){
        let ascending: boolean;
        value === "name" ? ascending=true : ascending=false;
        dispatch(setSorting(value, ascending))
    }


    return (
        <div>
        <div className="input-field col s12">
            <select value="" className="Sortingbutton" id="Sortingbutton" onChange={(e) => updateSortingbutton(e.target.value)}>
            <option value="" disabled selected>Sort</option>
            <option value="price">Price</option>
            <option value="stars">Stars</option>
            <option value="name">Name</option>

            </select>
            <label>Sort on</label>
        </div>
        </div>
    )
}

export default Sortingbutton


