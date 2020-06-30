import React from 'react'

import Header from './header'
import './layout.css'
import layoutStyles from './layout.module.css'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className={layoutStyles.main}>
        <main>{children}</main>
        <footer></footer>
      </div>
    </>
  )
}

export default Layout
