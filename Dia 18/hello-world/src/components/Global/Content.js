import React, { Component } from 'react';
import logo from './images/logo.jpg';
import './css/Content.css';

class Content extends Component {
  render() {
    return (
    <div className="Header">
      <header className="Logo">
        <img src={logo} alt="logo" />
        <h1>Soy el contenido</h1>

      </header>
    </div>
  );
  }
}

export default Content;
