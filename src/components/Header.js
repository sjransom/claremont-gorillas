import React from 'react'

import NavBar from './nav-bar'
import headerStyles from './header.module.css'

const Header = () => (
  <header className={headerStyles.header}>
    <section className={headerStyles.headerContent}>
      <NavBar />
    </section>
  </header>
)

export default Header
