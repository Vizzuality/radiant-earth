import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NavItem extends Component {
  render() {
    return (
      <li className="text -ff2-s -white">
        <a href={this.props.url}>{this.props.name}</a>
      </li>
    )
  };
}

NavItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default NavItem;
