import React from 'react';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { url, name, subMenu, color, current, disabled } = props;
  return (
    <li className={`text -ff2-s -color-1 ${color === 'white' ? '-white' : '-color-1'} ${subMenu ? 'has-sub-menu' : ''} ${current ? '-selected' : ''} ${disabled ? '-disabled' : ''}`}>
      <a href={url}>{name}</a>
      {subMenu && <div className="border-sub-menu"><ul className="sub-menu">
        {subMenu.map((item, i) =>
          (<a key={i.toString()} href={item.url}>
            <li className="text -ff2-xs -uppercase">{item.name}</li>
          </a>)
          )}
      </ul></div>}
    </li>
  );
}

NavItem.defaultProps = {
  subMenu: null,
  color: null,
  current: null,
  disabled: false
};

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  subMenu: PropTypes.array,
  color: PropTypes.string,
  current: PropTypes.bool,
  disabled: PropTypes.bool
};

export default NavItem;
