import React from 'react';
import PropTypes from 'prop-types';

function NavItem(props) {
  const { url, name } = props;
  return (
    <li className="text -ff2-s -color-1">
      <a href={url}>{name}</a>
    </li>
  );
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default NavItem;
