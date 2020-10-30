import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';
import { stateType } from '../RestaurantList/Restaurants';

interface PaginationInterface{
    skipNumber: number;
    pageNumber: number;
}

const PaginationButton: React.FC <PaginationInterface> = ({skipNumber, pageNumber}) => {

    const dispatch = useDispatch();
    const [active, setActive] = useState(false);

    //Updates the skip state in redux, which controlls the number of restaurants to skip
    const handleClick = (skipNumber: number) => {
        dispatch(updateSkip(skipNumber))
    }

<<<<<<< HEAD
    //Checks if skip matches the number for the paginationbutton, and sets button to active
    useEffect(() => {
=======
    const skip = useSelector((state: stateType) => state.skip)

>>>>>>> f46f841d040f5e8ae46dbdd40dba11f942e7e2aa

    useEffect(() => {
        const checkSkipNumber=() =>{
            (skip == skipNumber) ? setActive(true) : setActive(false)
        }
<<<<<<< HEAD

        checkSkipNumber();

=======
        checkSkipNumber(); 
>>>>>>> f46f841d040f5e8ae46dbdd40dba11f942e7e2aa
    }, [skip])

    //Button gets colour yellow when active 
    return (
        <li className={active ? "active #ffc107 amber" : "waves-effect"} onClick={() => handleClick(skipNumber)}><a>{pageNumber}</a></li>
    )
}

export default PaginationButton
