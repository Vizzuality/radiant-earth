import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

function Nav(props) {
  const { links, color } = props;
  return (
    <div className="c-nav">
      <ul>
        {links.map((item, i) =>
          (<NavItem
            key={i.toString()}
            name={item.name}
            url={item.url}
            subMenu={item.subMenu}
            color={color}
            current={item.current}
          />)
        )}
      </ul>
    </div>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired,
  color: PropTypes.string.isRequired
};

export default Nav;
