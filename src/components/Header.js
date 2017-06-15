import React, { Component } from 'react';
import Nav from './Nav';

class Header extends Component {
  render() {
    return (
      <div className="c-header">
        <div className="row">
          <div className="small-6 columns"></div>
          <div className="small-6 columns">
            <Nav />
          </div>
        </div>
        <div className="c-header__background"></div>
      </div>
    )
  };
}

export default Header;
