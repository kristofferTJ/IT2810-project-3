import React, {useState, useEffect} from 'react'
import PaginationButton from './PaginationButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';
import { stateType } from '../RestaurantList/Restaurants';

export default function Pagination() {

    const dispatch = useDispatch();

    let skip = useSelector((state: stateType) => state.skip)
    let counter = useSelector((state: stateType) => state.counter)

    let counterList: number[] = [];
    let pageNumber: number = 0;

    //Legger til alle sidetallene i en liste som kan itereres gjnnom

    for (let i=0; i<counter; i++){
        counterList.push(pageNumber)
        pageNumber += 1;
    }

    //Genererer riktig antall "pagination-knapper" etter antall sider
    //Gjør så det ikke er mulig å trykke seg videre med pilene når man er på første og siste side

    return(
        <ul className="pagination">
            <li className={skip===0 ? "disabled" : "waves-effect"} ><a href="#!" onClick={() => skip>0 ? dispatch(updateSkip(skip - 20)) : skip=0}><i className="material-icons">chevron_left</i></a></li>
                {counterList.map((value: number) => (
                    <PaginationButton
                        skipNumber={value*20} pageNumber={value+1}
                    ></PaginationButton>
                ))}
            <li className={counter > (skip/20+1) ? "waves-effect" :  "disabled"} ><a href="#!" onClick={() => (skip/20+1)<counter ? dispatch(updateSkip(skip + 20)) : skip===skip}><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}