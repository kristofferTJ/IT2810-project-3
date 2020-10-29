import React, {useEffect} from 'react'

function Slides() {

    useEffect(() => {
        const slide = () => {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {}); 
    }
        slide();
    }, [])

    return (
        <div>
            <div className="slider">
                <ul className="slides">
                    <li>
                        <img src={require('../../images/Food1.jpg')}/> 
                        <div className="caption center-align">
                        <h3 className="food-text">Ready to find some gourmet food?</h3>
                        <h5 className="light grey-text text-lighten-3">We have collected the worlds best restaurants in one place</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/Wine glass.jpg')}/> 
                        <div className="caption left-align">
                        <h3>World class restaurants</h3>
                        <h5 className="light grey-text text-lighten-3">All with michelin stars</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/World food.jpg')}/> 
                        <div className="caption right-align">
                        <h3>From all over the world</h3>
                        <h5 className="light grey-text text-lighten-3">You can go to your favorite region</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/Dinner.jpg')}/> 
                        <div className="caption center-align">
                        <h3>Just a search away</h3>
                        <h5 className="light grey-text text-lighten-3">Click on the button bellow to start searching</h5>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default Slides
