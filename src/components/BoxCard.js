import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BoxTitleContent from './BoxTitleContent';
import ModalVideo from './ModalVideo';

class BoxCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showTooltip: false,
      isOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  showModal() {
    this.setState({
      showTooltip: !this.state.showTooltip
    });
  }

  render() {
    const { title, subTitle, text, buttonText, buttonUrl, img, video, channel, url } = this.props;
    const { showTooltip, isOpen } = this.state;
    return (
      <div className="c-box-card columns large-4 medium-6 small-12">
        <div
          className="c-box-card__img"
          style={{ backgroundImage: `url(${img})` }}
        >
          {video &&
            <ModalVideo
              channel={channel}
              videoId={video}
              isOpen={isOpen}
              onClose={() => this.openModal()}
            />
          }
          {video &&
            <div className={`c-box-card__tooltip-video ${showTooltip ? '-show' : ''}`}>
              <span className="text">show video</span>
            </div>
          }
          {video &&
            <svg
              className="icon icon-play"
              onMouseEnter={() => this.showModal()}
              onMouseLeave={() => this.showModal()}
              onClick={() => this.openModal()}
            >
              <use xlinkHref="#icon-play">{}</use>
            </svg>
          }</div>
        <BoxTitleContent
          title={title}
          subTitle={subTitle}
          text={text}
          buttonText={buttonText}
          buttonUrl={buttonUrl}
          url={url}
        />
      </div>
    );
  }
}

BoxCard.defaultProps = {
  title: null,
  subTitle: null,
  text: null,
  buttonText: null,
  buttonUrl: null,
  channel: null,
  img: null,
  video: null,
  url: null
};

BoxCard.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  channel: PropTypes.string,
  img: PropTypes.string,
  video: PropTypes.string,
  url: PropTypes.string,
};

export default BoxCard;
