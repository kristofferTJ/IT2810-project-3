import React from 'react';
import './Reviews.css';

type Props = {
    commentObject: string
  }
 
//Prints out comment
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
