import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import NavItem from './NavItem';
import radiantLogo from '../images/logos/radiant.png';

function BurgerMenu(props) {
  const { links } = props;
  return (
    <div className="c-burger-menu">
      <Menu right width={'100%'}>
        <img alt="Radiant.earth" className="c-header__logo" src={radiantLogo} />
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
  links: PropTypes.string.isRequired
};

export default BurgerMenu;
