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

    const skip = useSelector((state: stateType) => state.skip)


    useEffect(() => {
        const checkSkipNumber=() =>{
            (skip == skipNumber) ? setActive(true) : setActive(false)
        }
        checkSkipNumber(); 
    }, [skip])

    return (
        <li className={active ? "active #ffc107 amber" : "waves-effect"} onClick={() => handleClick(skipNumber)}><a>{pageNumber}</a></li>
    )
}

export default PaginationButton
