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
                        <img src={require('../../images/Modern cuisine.jpg')}/> 
                        <div className="caption center-align">
                        <h3 className="black">Ready to find some food?</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/Classic cuisine.jpg')}/> 
                        <div className="caption left-align">
                        <h3>World class restaurants</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/Korean.jpg')}/> 
                        <div className="caption right-align">
                        <h3>From all over the world</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src={require('../../images/Market cuisine.jpg')}/> 
                        <div className="caption center-align">
                        <h3>Just a search away</h3>
                        <h5 className="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                </ul>
            </div> 
        </div>
    )
}

export default Slides
