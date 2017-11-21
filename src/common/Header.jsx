import React from 'react'
import { Link, IndexLink } from 'react-router'

const Header = () => (
    <div className="header">
        <nav className="header__navbar">
            <IndexLink to="/" activeClassName="header__navbar--active">Home</IndexLink>
            <Link to="/" activeClassName="header__navbar--active">Library</Link>
        </nav>
    </div>
)

export default Header