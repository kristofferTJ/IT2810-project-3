import React from 'react';
import './Reviews.css';

type Props = {
    commentObject: string
  }
<<<<<<< HEAD
 
//Prints out comment
=======

>>>>>>> f46f841d040f5e8ae46dbdd40dba11f942e7e2aa
function Comment({commentObject}: Props) {
    return (
        <div>
            <div className="comment">
                <blockquote>{commentObject}</blockquote>
            </div>
            <div className="divider"></div>
        </div>
    )
}

export default Comment
