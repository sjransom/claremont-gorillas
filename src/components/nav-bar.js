import React from 'react'

import { Link } from 'gatsby'
import navbarStyles from './nav-bar.module.css'

const NavBar = () => {
  return (
    <>
      <nav className={navbarStyles.navBarContainer}>
        <ul className={navbarStyles.navBar}>
          <li>
            <Link activeClassName={navbarStyles.active} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
          <li>
            <Link to="/fixtures">Fixtures</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NavBar
