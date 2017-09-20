import React from 'react';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import NavItem from './NavItem';
import radiantLogo from '../images/logos/radiant.png';

function BurgerMenu(props) {
  const { links, color } = props;
  return (
    <div className={`c-burger-menu ${color === 'white' ? '-white' : ''}`}>
      <Menu right width={'100%'}>
        <a href="/"><img alt="Radiant.earth" className="c-header__logo" src={radiantLogo} /></a>
        <ul>
          {links.map((item, i) =>
            (<NavItem
              key={i.toString()}
              name={item.name}
              url={item.url}
              subMenu={item.subMenu}
              disabled={item.disabled}
            />)
          )}
        </ul>
      </Menu>
    </div>
  );
}

BurgerMenu.propTypes = {
  links: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired
};

export default BurgerMenu;
