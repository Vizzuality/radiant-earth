import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <div className="c-button">
        <a href={this.props.url} className="text -ff2-m -color-2 -uppercase">{this.props.text}</a>
      </div>
    )
  };
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Button;
