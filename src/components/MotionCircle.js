import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MotionCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }

  handleMouseMove = (e) => {
    this.setState({
      x: e.clientX - e.target.getBoundingClientRect().left - this.props.width,
      y: e.clientY - e.target.getBoundingClientRect().top - this.props.width
    });
  }

  render() {
    const { x, y } = this.state;
    const { backgroundImage, width} = this.props;
    return (
      <div
        className="c-motion-circle"
        onMouseMove={this.handleMouseMove}
        style={{ backgroundPosition: `${x / 7}px ${y / 7}px`, width: `${width}px`, height: `${width}px`, backgroundImage: `url(${backgroundImage})`, backgroundSize: `${width * 1.2}px ${width * 1.2}px` }}
      />
    );
  }
}

MotionCircle.defaultProps = {
  backgroundImage: ''
};

MotionCircle.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};

export default MotionCircle;
