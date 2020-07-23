import React from 'react'

import NavBar from './nav-bar'
import headerStyles from './header.module.css'

const Header = () => (
  <header className={headerStyles.header}>
    <div className={headerStyles.headerContent}>
      <NavBar />
    </div>
  </header>
)

export default Header
