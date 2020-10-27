import React from 'react'

function addComment() {
    return (
        <div>
            <h5>Add review</h5>
            <form className="col s12">
                <div className="row">
                    <div className="input-field col s12">
                    <textarea id="textarea1" className="materialize-textarea"></textarea>
                    </div>
                </div>
                <a href="" className="btn">Add comment</a>
            </form> 
        </div>
    )
}

export default addComment
