import React from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

function Nav(props) {
  const { links } = props;
  return (
    <div className="c-nav">
      <ul>
        {links.map((item, i) =>
          <NavItem key={i.toString()} name={item.name} url={item.url} />
        )}
      </ul>
    </div>
  );
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
