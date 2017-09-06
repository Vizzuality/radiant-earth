import React, { Component } from 'react';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';
import radiantLogo from '../images/logos/radiant.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.navLinks = [
      {
        name: 'Explore',
        url: '/explore'
      },
      {
        name: 'Community',
        url: '/community'
      },
      {
        name: 'Get Involved',
        url: '/get-involved'
      },
      {
        name: 'News',
        url: '/news'
      },
      {
        name: 'About',
        url: '/about'
      },
    ];
  }

  render() {
    return (
      <div className="c-header">
        <div className="c-header__content row">
          <div className="small-3 columns">
            <a href="/">
              <img alt="Radiant.earth" className="c-header__logo" src={radiantLogo} />
            </a>
          </div>
          <div className="small-9 columns">
            <Nav links={this.navLinks} />
            <BurgerMenu links={this.navLinks} />
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
