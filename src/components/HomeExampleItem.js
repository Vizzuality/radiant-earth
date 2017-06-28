import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import Button from '../components/Button';
import SearchInput from '../components/SearchInput';

class HomeExampleItem extends Component {
  render() {
    const contentClass = `l-home__block l-home__example ${this.props.inverse ? 'l-home__example--inverse' : ''}`;
    const textBlockClass = this.props.slider ? 'small-12 medium-5 columns' : 'small-12 medium-6 columns';

    const sliderOptions = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };

    return (
      <div className={contentClass}>
        <div className="row">
          <div className={textBlockClass}>
            <div className="l-home__example-text">
              <div className="row">
                <div className="small-12 columns text -ff2-xs -color-2 -uppercase">{this.props.headboard}</div>
                <div className="small-12 columns l-home__example-text-2 text -ff2-l -white">{this.props.title}</div>
                <div className="small-12 columns l-home__example-text-3 text -ff1-m -white">{this.props.description}</div>
                { this.props.button ?
                  <div className="small-12 medium-5 columns l-home__example-button">
                    <Button text={this.props.button.text} url={this.props.button.url} />
                  </div>
                  : null }
                { this.props.search ?
                  <div className="small-12 medium-9 columns l-home__example-search">
                    <SearchInput placeholder={this.props.search.placeholder} />
                  </div>
                  : null }
              </div>
            </div>
          </div>
          { this.props.img ?
            <div className="small-12 medium-6 columns l-home__example-img-container">
              <img src={this.props.img} alt="" />
            </div>
            : null }
          { this.props.slider ?
            <div className="small-12 medium-7 columns l-home__example-slider">
              <Slider {...sliderOptions}>
                {this.props.slider.images.map((item, i) =>
                  <div key={i} className="l-home__example-slider-item">
                    <span></span>
                  </div>
                )}
              </Slider>
            </div>
            : null }
        </div>
      </div>
    )
  };
}

HomeExampleItem.propTypes = {
  headboard: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  img: PropTypes.string,
  slider: PropTypes.object,
  inverse: PropTypes.bool,
  button: PropTypes.object,
  search: PropTypes.object
};

export default HomeExampleItem;
