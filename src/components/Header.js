import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
const Header = () => {
    return (
        <header className="header">
            <Router>
                <Link to="/"><h1>STCAT HOUSE</h1></Link>
            </Router>
            
            
        </header>
    )
}

export default Header