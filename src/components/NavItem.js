import React from 'react';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { url, name, subMenu, color } = props;
  return (
    <li className={`text -ff2-s -color-1 ${color === 'white' ? '-white' : '-color-1'} ${subMenu ? 'has-sub-menu' : ''}`}>
      <a href={url}>{name}</a>
      {subMenu && <ul className="sub-menu">
        <li>
          {subMenu.map((item, i) =>
            <a className="text -ff2-xs -uppercase" key={i.toString()} href={item.url}>{item.name}</a>
          )}</li>
      </ul>}
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subMenu: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired
};

export default NavItem;
