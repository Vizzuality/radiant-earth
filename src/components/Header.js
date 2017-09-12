import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';
import radiantLogo from '../images/logos/radiant.png';
import radiantLogoWhite from '../images/logos/radiant-white.png';

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
        url: '/about',
        subMenu: [
          {
            name: 'staff',
            url: '/staff'
          }
        ]
      },
    ];
  }

  render() {
    const { color } = this.props;
    return (
      <div className={`c-header ${color === 'white' ? '-white' : ''}`}>
        <div className="c-header__content row">
          <div className="small-3 columns">
            <a href="/">
              <img alt="Radiant.earth" className="c-header__logo" src={`${color === 'white' ? radiantLogoWhite : radiantLogo}`} />
            </a>
          </div>
          <div className="small-9 columns">
            <Nav color={color} links={this.navLinks} />
            <BurgerMenu links={this.navLinks} />
          </div>
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Header;
