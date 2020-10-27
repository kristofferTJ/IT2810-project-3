import React from 'react';
import './Reviews.css';

function Comment() {
    return (
        <div>
            <div className="divider"></div>
            <div className="comment">
                <p className="username">Username</p>
                <blockquote>Veldig god mat! Fint interiør og hyggelig personale!</blockquote>
            </div>
            <div className="divider"></div>
            <div className="comment">
                <p className="username">Username</p>
                <blockquote>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde libero dolorum nisi perspiciatis autem nam impedit tenetur rerum et optio dolorem similique, magnam itaque, eius ut ullam obcaecati quas! Modi?</blockquote>
            </div>             
        </div>
    )
}

export default Comment
