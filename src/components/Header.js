import React, { Component } from 'react';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';

class Header extends Component {
  render() {
    return (
      <div className="c-header">
        <div className="c-header__content row">
          <div className="small-3 columns"></div>
          <div className="small-9 columns">
            <Nav/>
            <BurgerMenu/>
          </div>
        </div>
      </div>
    )
  };
}

export default Header;
