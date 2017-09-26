import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MotionCircle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: props.width * 2,
      y: props.width * 2
    };
  }

  handleMouseMove = (e) => {
    if (this.props.move) {
      this.setState({
        x: e.clientX - e.target.getBoundingClientRect().left - ((this.props.width * 2) / 40),
        y: e.clientY - e.target.getBoundingClientRect().top - ((this.props.width * 2) / 40)
      });
    }
  }

  render() {
    const { x, y } = this.state;
    const { backgroundImage, width, move } = this.props;
    return (
      <div
        className={`c-motion-circle ${move ? '' : '-no-move'}`}
        onMouseMove={this.handleMouseMove}
        style={{ backgroundPosition: `${-(x / 10)}px ${-(y / 10)}px`, width: `${width}px`, height: `${width}px`, backgroundImage: `url(${backgroundImage})`, backgroundSize: `${width * 1.2}px ${width * 1.2}px` }}
      />
    );
  }
}

MotionCircle.defaultProps = {
  backgroundImage: '',
  move: true
};

MotionCircle.propTypes = {
  backgroundImage: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  move: PropTypes.bool
};

export default MotionCircle;
