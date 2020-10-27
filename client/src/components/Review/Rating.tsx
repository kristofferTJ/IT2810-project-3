import React, {useEffect} from 'react';
import './Reviews.css';
import noUiSlider from 'nouislider';
import 'nouislider/distribute/nouislider.css';
import './Reviews.css';
import wNumb from 'wnumb';

function Rating() {

    /*
    useEffect(() => {
        const slider = () => {
            var slider = document.getElementById('test-slider');
            noUiSlider.create(slider!, {
            start: 1,
            connect: true,
            step: 1,
            orientation: 'horizontal', // 'horizontal' or 'vertical'
            range: {
                'min': 0,
                'max': 10
            },
            format: wNumb({
                decimals: 0
            })
            });  
    }
        slider();
    }, [])
    */

    return (
        <div className="section">
            <div className="container">
            <div id="ratingContainer" className="z-depth-1">
                <h5 className="ratingText">Average rating: <span className="rating">11/10</span></h5>
                <div className="divider"></div>
                <div className="ratingBox">
                <p className="left">Give rating:</p>
                    <form action="#">
                        <p className="range-field">
                        <input type="range" id="test5" min="0" max="10" />
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Rating
