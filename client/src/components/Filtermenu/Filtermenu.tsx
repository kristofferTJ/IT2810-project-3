import React, { useEffect } from 'react';
import './Filtermenu.css';
import M from 'materialize-css';
import { useSelector, useDispatch } from 'react-redux';
//import { updateType } from '../../store/ducks/filterDuck';


export default function Filtermenu() {

    //const dispatch = useDispatch();
    //const types = useSelector(state => state.types);

    const regions = [
        {
            "_id": 1,
            "name": "Austria"
        },
        {
            "_id": 2,
            "name": "California"
        },
        {
            "_id": 3,
            "name": "Chicago"
        },
    ]


    useEffect(() => {
        const open = () => {
            var elems = document.querySelectorAll('.collapsible.expandable');
            var instances = M.Collapsible.init(elems, {accordion: false});;   

    }
        open();
    }, [])

    const renderCheckboxlist = () => regions.map((value, index) => (
        <React.Fragment key={index}>
        <input type="checkbox" className="filled-in"/>
        <span>{value.name}</span>
        </React.Fragment>
  ))

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
                            {renderCheckboxlist()} 
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


