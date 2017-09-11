import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import NavItem from './NavItem';

function BurgerMenu(props) {
  const { links } = props;
  return (
    <div className="c-burger-menu">
      <Menu right width={'100%'}>
        <svg className="icon icon-logo"><use xlinkHref="#icon-logo">{}</use></svg>
        <ul>
          {links.map((item, i) =>
            <NavItem key={i.toString()} name={item.name} url={item.url} />
          )}
        </ul>
      </Menu>
    </div>
  );
}

BurgerMenu.propTypes = {
  links: PropTypes.array.isRequired
};

export default BurgerMenu;
