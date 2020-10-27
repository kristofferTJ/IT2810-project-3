import React from 'react';
import './Reviews.css';
import addComment from './addComment';
import Comment from './Comment';

function Reviews() {
    return (
        <div className="section">
            <div className="container">
                <div id="reviewContainer" className="z-depth-1">
                    <h5>Comments:</h5>
                    <div className="section">
                       <Comment></Comment>
                    </div>
                </div>
                <div>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label>Add comment</label>
                            <a href="" className="btn cyan lighten-2">Submit</a>
                            </div>
                        </div>
                    </form> 
                </div>
            </div>
        </div>
    )
}

export default Reviews
