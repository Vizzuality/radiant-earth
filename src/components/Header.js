import React, { Component } from 'react';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';

class Header extends Component {

  constructor (props) {
    super(props);

    this.navLinks = [
      {
        name: 'API Documentation',
        url: 'https://radiant-earth-doc-api.herokuapp.com/'
      },
      {
        name: 'Blog',
        url: '/blog'
      },
      {
        name: 'About',
        url: '/about'
      }
    ];
  }

  render() {
    return (
      <div className="c-header">
        <div className="c-header__content row">
          <div className="small-3 columns">
            <a href="/">
              <svg className="icon icon-logo"><use xlinkHref="#icon-logo"></use></svg>
            </a>
          </div>
          <div className="small-9 columns">
            <Nav links={this.navLinks}/>
            <BurgerMenu links={this.navLinks}/>
          </div>
        </div>
      </div>
    )
  };
}

export default Header;
