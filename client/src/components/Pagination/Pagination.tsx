import React, {useState, useEffect} from 'react'
import PaginationButton from './PaginationButton';
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';

type skipType = {
    skip: number;
}

export default function Pagination() {

    const dispatch = useDispatch();

    let skip = useSelector((state: skipType) => state.skip)


    return(
        <ul className="pagination">
            <li className={skip===0 ? "disabled" : "waves-effect"} ><a href="#!" onClick={() => dispatch(updateSkip(skip - 20))}><i className="material-icons">chevron_left</i></a></li>
            <PaginationButton skipNumber={0} pageNumber={1}></PaginationButton>
            <PaginationButton skipNumber={20} pageNumber={2}></PaginationButton>
            <PaginationButton skipNumber={40} pageNumber={3}></PaginationButton>
            <PaginationButton skipNumber={60} pageNumber={4}></PaginationButton>
            <PaginationButton skipNumber={80} pageNumber={5}></PaginationButton>
            <PaginationButton skipNumber={100} pageNumber={6}></PaginationButton>
            <li className="waves-effect" ><a href="#!" onClick={() => dispatch(updateSkip(skip + 20))}><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}