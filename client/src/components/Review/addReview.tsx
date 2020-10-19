import React, { FormEvent } from 'react';
import { useState } from 'react';

type Props = {
    saveReview: (review: Review | any) => void
}

export const AddReview: React.FC<Props> = ({ saveReview }) => {
    const [review, setReview] = useState<Review|{}>()

    const handleData = (e: FormEvent<HTMLInputElement>) => {
        setReview({
            ...review,
            [e.currentTarget.id]: e.currentTarget.value,
        })
    }

    const addNewReview = (e: FormEvent) => {
        e.preventDefault()
        saveReview(review)
    }

    return (
        <form onSubmit={addNewReview}>
            <input
            type="number"
            id="stars"
            placeholder="Number of stars"
            onChange={handleData}
            ></input>
            <input
            type="text"
            id="text"
            placeholder="Description"
            onChange={handleData}
            ></input>
            <input
            type="text"
            id="authorName"
            placeholder="Your name"
            onChange={handleData}
            ></input>
            <button disabled={review===undefined ? true : false}>
                Add Review
            </button>
        </form>
    )
}

