import React from 'react'

function Searchbar() {
    return (
        <section id="search" className="section section-search">       
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <h5>Search restaurants</h5>
                        <div className="input-filed">
                            <input type="text" className="white gray-text" placeholder="Search for restaurants...">
                            </input>
                            <a className="waves-effect waves-teal btn-flat"><i className="material-icons">search</i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Searchbar
