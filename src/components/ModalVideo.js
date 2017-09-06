import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import Player from '@vimeo/player';

class ModalVideo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      playerYoutube: null,
      playerVimeo: null
    };
  }

  componentWillReceiveProps() {
    const player = new Player('vimeo-contain', {
      id: 19231868,
      width: 640
    });

    this.setState({
      playerVimeo: player,
    });
  }

  onReady(event) {
    this.setState({
      playerYoutube: event.target,
    });
  }

  onPauseVideo() {
    if (this.state.playerYoutube) {
      this.state.playerYoutube.pauseVideo();
    } else {
      this.state.playerVimeo.pause();
    }
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
        onClick={() => this.closeModal(channel)}
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
        <div id="vimeo-contain" className={`video-contain -vimeo ${isOpen ? '-show' : ''}`}>
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
