import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './css/Header.css';

class Header extends Component {
  render() {
    return (
    <div className="Header">
      <header className="Logo">
        <img src={logo} alt="logo" />
        <p>
          Hello <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
  }
}

export default Header;
