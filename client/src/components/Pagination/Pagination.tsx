import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';
import PaginationButton from './PaginationButton';

export default function Pagination() {


    return(
        <ul className="pagination">
            <PaginationButton skipNumber={0} pageNumber={1}></PaginationButton>
            <PaginationButton skipNumber={20} pageNumber={2}></PaginationButton>
            <PaginationButton skipNumber={40} pageNumber={3}></PaginationButton>
            <PaginationButton skipNumber={60} pageNumber={4}></PaginationButton>
            <PaginationButton skipNumber={80} pageNumber={5}></PaginationButton>
            <PaginationButton skipNumber={100} pageNumber={6}></PaginationButton>
        </ul>
    )
}