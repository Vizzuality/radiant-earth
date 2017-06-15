import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

class Nav extends Component {
  render() {
    return (
      <div className="c-nav">
        <ul>
          {this.props.links.map((item, i) =>
            <NavItem key={i} name={item.name} url={item.url} />
          )}
        </ul>
      </div>
    )
  };
}

Nav.propTypes = {
  links: PropTypes.array.isRequired
};

export default Nav;
