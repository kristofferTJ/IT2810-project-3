import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { updateSkip } from '../../store/ducks/skipDuck';

interface PaginationInterface{
    skipNumber: number;
    pageNumber: number;
}

const PaginationButton: React.FC <PaginationInterface> = ({skipNumber, pageNumber}) => {

    const dispatch = useDispatch();

    const [active, setActive] = useState(false);

    const handleClick = (skipNumber: number) => {
        dispatch(updateSkip(skipNumber))
    }
    const skip = useSelector((state: any) => state.skip)


    useEffect(() => {

        const checkSkipNumber=() =>{
            (skip == skipNumber) ? setActive(true) : setActive(false)
        }

        checkSkipNumber();

        console.log(skip, skipNumber)
 
    }, [skip])

    return (
        <li className={active ? "active #ffc107 amber" : "waves-effect"} onClick={() => handleClick(skipNumber)}><a>{pageNumber}</a></li>
    )
}

export default PaginationButton
