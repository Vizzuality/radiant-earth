import React from 'react';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { url, name, subMenu } = props;
  return (
    <li className={`text -ff2-s -color-1 ${subMenu ? 'has-sub-menu' : ''}`}>
      <a href={url}>{name}</a>
      {subMenu && <ul className="sub-menu">
        <li>
          {subMenu.map((item, i) =>
            <a className="text -ff2-xs -uppercase -color-1" key={i.toString()} href={item.url}>{item.name}</a>
          )}</li>
      </ul>}
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subMenu: PropTypes.string.isRequired
};

export default NavItem;
