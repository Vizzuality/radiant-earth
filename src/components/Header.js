import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollEvent from 'react-onscroll';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';
import radiantLogo from '../images/logos/radiant.png';
import radiantLogoWhite from '../images/logos/radiant-white.png';

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      sticky: false,
    };

    this.navLinks = [
      {
        name: 'Explore',
        url: '/explore',
        current: props.currentPath === '/explore',
        disabled: false
      },
      {
        name: 'Community',
        url: '/community',
        current: props.currentPath === '/community',
        disabled: true
      },
      {
        name: 'Get Involved',
        url: '/get-involved',
        current: props.currentPath === '/get-involved',
        disabled: false
      },
      {
        name: 'News',
        url: '/news',
        current: props.currentPath === '/news',
        disabled: false
      },
      {
        name: 'About',
        url: '/about',
        current: props.currentPath === '/about',
        disabled: false,
        subMenu: [
          {
            name: 'our team',
            url: '/our-team'
          }
        ]
      },
    ];
  }

  handleScrollCallback() {
    if (window.scrollY > 120) {
      this.setState({
        sticky: true
      });
    } else {
      this.setState({
        sticky: false
      });
    }
  }

  render() {
    const { color } = this.props;
    const { sticky } = this.state;
    return (
      <div className={`c-header ${color === 'white' ? '-white' : ''} ${sticky ? '-sticky' : ''}`}>
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <div className="c-header__content row">
          <div className="small-3 columns">
            <a href="/">
              {sticky === false && <img alt="Radiant.earth" className="c-header__logo" src={`${color === 'white' ? radiantLogoWhite : radiantLogo}`} />}
              {sticky === true && <img alt="Radiant.earth" className="c-header__logo" src={radiantLogo} />}
            </a>
          </div>
          <div className="small-9 columns">
            <Nav color={color} links={this.navLinks} />
            <BurgerMenu links={this.navLinks} color={color} />
          </div>
        </div>
      </div>
    );
  }
}

Header.defaultProps = {
  color: '',
  currentPath: null
};

Header.propTypes = {
  color: PropTypes.string.isRequired,
  currentPath: PropTypes.string,
};

export default Header;
