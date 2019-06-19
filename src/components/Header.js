import React from 'react'
import logo from '../logo.svg';

const Header = () => (
  <header className="header container">
    <img src={logo} alt="logo" />
    <div>
      <h1 className="main-heading">London Gorillas</h1>
      <h2 className="subheading">Wimbledon & District League Division 2 Champions 2018/19</h2>
    </div>
  </header>
)

export default Header