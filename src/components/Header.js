import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import mypic from '../images/home.png'

const Header = () => {
    return (
<header className="header">
            <Router>
            <Link to="/">
                <img src={mypic} alt='mypic' id="homebutton" />
            </Link>
            <h1>STCAT HOUSE</h1>
            </Router>
               
        </header>
    )
}

export default Header