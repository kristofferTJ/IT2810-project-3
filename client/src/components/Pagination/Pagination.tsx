import React, {useState, useEffect} from 'react'
import PaginationButton from './PaginationButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';
import { stateType } from '../RestaurantList/Restaurants';
import { ObjectFlags } from 'typescript';

export default function Pagination() {

    const dispatch = useDispatch();

    let skip = useSelector((state: stateType) => state.skip)
    let counter = useSelector((state: stateType) => state.counter)

    let counterList: number[] = [];
    let pageNumber: number = 0;

    for (let i=0; i<counter; i++){
        counterList.push(pageNumber)
        pageNumber += 1;

    }


    return(
        <ul className="pagination">
            <li className={skip===0 ? "disabled" : "waves-effect"} ><a href="" onClick={() => dispatch(updateSkip(skip - 20))}><i className="material-icons">chevron_left</i></a></li>
                {counterList.map((value: number) => (
                    <PaginationButton
                        skipNumber={value*20} pageNumber={value+1}
                    ></PaginationButton>
                ))}
            {/* <PaginationButton skipNumber={0} pageNumber={1}></PaginationButton>
            <PaginationButton skipNumber={20} pageNumber={2}></PaginationButton>
            <PaginationButton skipNumber={40} pageNumber={3}></PaginationButton>
            <PaginationButton skipNumber={60} pageNumber={4}></PaginationButton>
            <PaginationButton skipNumber={80} pageNumber={5}></PaginationButton>
            <PaginationButton skipNumber={100} pageNumber={6}></PaginationButton> */}
            <li className="waves-effect" ><a href="" onClick={() => dispatch(updateSkip(skip + 20))}><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}