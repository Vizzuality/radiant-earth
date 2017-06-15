import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <div className="c-nav">
        <ul>
          <li className="text -ff2-s -white">Documentation</li>
          <li className="text -ff2-s -white">Data explorer</li>
          <li className="text -ff2-s -white">Blog</li>
          <li className="text -ff2-s -white">About</li>
        </ul>
      </div>
    )
  };
}

export default Nav;
