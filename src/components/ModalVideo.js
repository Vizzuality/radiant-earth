import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class ModalVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: null,
    };
  }

  onReady(event) {
    this.setState({
      player: event.target,
    });
  }

  onPauseVideo() {
    this.state.player.pauseVideo();
  }

  closeModal() {
    this.props.onClose();
    this.onPauseVideo();
  }

  render() {
    const { channel, videoId, isOpen } = this.props;
    const optsYoutube = {
      playerVars: {
        autoplay: 0
      }
    };
    return (
      <div
        role="button"
        tabIndex={0}
        className={`c-modal-video ${isOpen ? '-show' : ''}`}
        onClick={() => this.closeModal()}
      >
        {channel === 'youtube' &&
        <div className={`video-contain -youtube ${isOpen ? '-show' : ''}`}>
          <YouTube
            opts={optsYoutube}
            videoId={videoId}
            onReady={this.onReady.bind(this)}
          />
        </div>
        }

        {channel === 'vimeo' &&
        <div className={`video-contain -vimeo ${isOpen ? '-show' : ''}`}>
          {}
        </div>
        }
      </div>
    );
  }
}

ModalVideo.propTypes = {
  channel: PropTypes.string.isRequired,
  videoId: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ModalVideo;
