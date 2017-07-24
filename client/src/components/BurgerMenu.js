import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu'
import NavItem from './NavItem';

class BurgerMenu extends Component {
  render() {
    return (
      <div className="c-burger-menu">
        <Menu right width={ '100%' }>
          <svg className="icon icon-logo"><use xlinkHref="#icon-logo"></use></svg>
          <ul>
            {this.props.links.map((item, i) =>
              <NavItem key={i} name={item.name} url={item.url} />
            )}
          </ul>
        </Menu>
      </div>
    )
  };
}

BurgerMenu.propTypes = {
  links: PropTypes.array.isRequired
};

export default BurgerMenu;
