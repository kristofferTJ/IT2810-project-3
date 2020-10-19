import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';


type Props = {
    review: Review
}

export const Review: React.FC<Props> = ({ review }) => {
    const dispatch: Dispatch<any> = useDispatch()

    return (
        <div className="Review">
            <div>
                <h1>Stjerner: {review.stars}</h1>
                <p>Beskrivelse: {review.text}</p>
                <p>Skrevet av: {review.authorName}</p>
            </div>
        </div>
    )
}