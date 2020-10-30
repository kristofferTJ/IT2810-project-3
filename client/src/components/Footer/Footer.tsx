import React from 'react'

function Footer() {
    return (
        <div>
            <footer className="page-footer #80deea cyan lighten-3">
            <div className="container">
                <div className="row">
                <div className="col l6 s12">
                    <h5 className="white-text">Michelindatabase</h5>
                    <p className="grey-text text-lighten-4">Giving you the worlds best restaurants in one place since 2020.</p>
                </div>
                <div className="col l4 offset-l2 s12">
                    <h5 className="white-text">Links</h5>
                    <ul>
                    <li><a className="grey-text text-lighten-3" href="https://guide.michelin.com/dk/en">Michelin guide</a></li>
                    </ul>
                </div>
                </div>
            </div>
            <div className="footer-copyright">
                <div className="container">
                © 2020 Copyright Michelindatabase Inc
                </div>
            </div>
        </footer>
            
        </div>
    )
}

export default Footer

