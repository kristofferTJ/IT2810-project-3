import React from 'react'
import { useDispatch } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';

export default function Pagination() {

    const dispatch = useDispatch();

    return(
        <ul className="pagination">
            <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
            <li className="active #ffc107 amber" onClick={() => dispatch(updateSkip(0))}><a href="#!">1</a></li>
            <li className="waves-effect" onClick={() => dispatch(updateSkip(0))}><a href="#!">2</a></li>
            <li className="waves-effect" onClick={() => dispatch(updateSkip(20))}><a href="#!">3</a></li>
            <li className="waves-effect" onClick={() => dispatch(updateSkip(40))}><a href="#!">4</a></li>
            <li className="waves-effect" onClick={() => dispatch(updateSkip(60))}><a href="#!">5</a></li>
            <li className="waves-effect" onClick={() => dispatch(updateSkip(80))}><a href="#!"><i className="material-icons">chevron_right</i></a></li>
        </ul>
    )
}