import React, { Component } from 'react';
import BoxTitleContent from './BoxTitleContent';

class BoxCard extends Component {
  render() {
    return (
      <div className="c-box-card columns large-4 medium-4 small-4">
        <div className="c-box-card__img"
          style={{ backgroundImage: 'url(' + this.props.img + ')' }}
        ></div>
        <BoxTitleContent
          title={this.props.title}
          text={this.props.text}
          buttonText={this.props.buttonText}
          buttonUrl={this.props.buttonUrl}
        />
      </div>
    )
  }
}

export default BoxCard;
