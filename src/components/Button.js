import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
  render() {
    return (
      <div className={`c-button ${this.props.back === 'orange' ? '-back-orange' : '-back-white'}`}>
        <a href={this.props.url} className={`text -ff2-m -color-2 -uppercase ${this.props.back === 'orange' ? '-white' : '-color-2'}`}>{this.props.text}</a>
      </div>
    )
  };
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Button;
