import React from 'react'
import PaginationButton from './PaginationButton';

export default function Pagination() {


    return(
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            <PaginationButton skipNumber={0} pageNumber={1}></PaginationButton>
            <PaginationButton skipNumber={20} pageNumber={2}></PaginationButton>
            <PaginationButton skipNumber={40} pageNumber={3}></PaginationButton>
            <PaginationButton skipNumber={60} pageNumber={4}></PaginationButton>
            <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li>
            {/* <li className="waves-effect" onClick={() => dispatch(updateSkip(80))}><a href="#!"><i className="material-icons">chevron_right</i></a></li> */}
        </ul>
    )
}