import React, { Component } from 'react';
import './css/Footer.css';
import PropTypes from 'prop-types'
class Footer extends Component {

  static propTypes = {
    copyrigth: PropTypes.string,
  };

  render() {
    const { copyrigth = '&copy; ReactFA 2019' } = this.props;
    return (
      <div className="Header">
        <header className="Logo">
          <p dangerouslySetInnerHTML={{ __html: copyrigth }}/>

        </header>
      </div>
    );
  }
}

export default Footer;
