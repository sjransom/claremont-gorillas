import React from 'react'

import 'normalize.css'
import './layout.css'

import Header from './header'
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
