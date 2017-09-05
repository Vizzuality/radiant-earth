import React, { Component } from 'react';
import Button from './Button';

class BoxTitleContent extends Component {
  render() {
    return (
      <div className="c-box-title-content">
        <div>
          <span className="text -ff2-xs -color-2 -uppercase">
            {this.props.subTitle}
          </span>
          <h2 className="text -ff2-l -color-1">
            {this.props.title}
          </h2>
          <p className="text -ff1-m">
            {this.props.text}
          </p>
        </div>
        {this.props.buttonText &&<div>
          <Button text={this.props.buttonText} url={this.props.buttonUrl} back="orange"/>
        </div> }
      </div>
    )
  };
}

export default BoxTitleContent;
