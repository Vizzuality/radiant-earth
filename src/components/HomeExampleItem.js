import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '../components/Button';

class HomeExampleItem extends Component {
  render() {
    return (
      <div className="l-home__block l-home__example">
        <div className="row">
          <div className="small-12 medium-6 columns">
            <div className="l-home__example-text">
              <div className="row">
                <div className="small-12 columns text -ff2-xs -color-2 -uppercase">{this.props.headboard}</div>
                <div className="small-12 columns l-home__example-text-2 text -ff2-l -white">{this.props.title}</div>
                <div className="small-12 columns l-home__example-text-3 text -ff1-m -white">{this.props.description}</div>
                { this.props.buttonText ?
                  <div className="small-12 medium-5 columns l-home__example-button">
                    <Button text={this.props.buttonText} url={this.props.buttonUrl} />
                  </div>
                : null}
              </div>
            </div>
          </div>
          <div className="small-12 medium-6 columns l-home__example-img-container">
            <img src={this.props.img} />
          </div>
        </div>
      </div>
    )
  };
}

HomeExampleItem.propTypes = {
  headboard: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  img: PropTypes.string.isRequired
};

export default HomeExampleItem;
