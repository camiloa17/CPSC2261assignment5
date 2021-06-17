import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue">
            <Link to="/" className="brand-logo center">Consuming APIs</Link>
            <ul id="nav-mobile" className="right">
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/About'>About</Link></li>
            </ul>
            </div>
        </nav>
    )
}

export default Navbar
