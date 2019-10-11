//Dependencias
import React, { Component } from 'react';
import PropTypes from 'prop-types';
//Assets
import logo from './images/logo.jpg';
import './css/Header.css';

class Header extends Component {
  static propTypes={
    title: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired
  };

  render() {
    const { title, items } = this.props;
    
    return (
    <div className="Header">
      <header className="Logo">
        <img src={logo} alt="logo" />
        <p>
          Hello {title}.
          <ul className="Menu">
            {items && items.map((item, key) => <li key={key}>{item.title}</li>)}
          </ul>
        </p>
      </header>
    </div>
  );
  }
}

export default Header;
