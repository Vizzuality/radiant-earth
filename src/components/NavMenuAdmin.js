import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NavItem from './NavItem';

class NavMenuAdmin extends Component {
  render() {
    return (
      <div className="l-add-category__menu-container">
        {this.props.links.map((item, i) =>
          <div className="l-add-category__menu">
            <a className="text -ff2-s" href={item.url}>{item.name}</a>
          </div>
        )}
        <div className="l-add-category__menu">
          <span className="text -ff2-s" onClick={this.logout}>Logout</span>
        </div>
      </div>
    )
  };
}

export default NavMenuAdmin;
