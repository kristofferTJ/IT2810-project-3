import React from 'react'

type Props = {
    commentObject: string
  }

  
function Comment({commentObject}: Props) {
    return (
        <div>
            <div className="divider"></div>
            <p>{commentObject}</p>
            <div className="divider"></div>
            <p>Veldig god mat!</p>
            <div className="divider"></div>
            <p>Veldig god mat!</p>
             <div className="divider"></div>
            <p>Veldig god mat!</p>  
        </div>
    )
}

export default Comment
