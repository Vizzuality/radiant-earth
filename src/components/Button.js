import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
  const { text, url, back } = props;
  return (
    <div className={`c-button ${back === 'orange' ? '-back-orange' : '-back-white'}`}>
      <a href={url} className={`text -ff2-xs -color-2 -uppercase ${back === 'orange' ? '-white' : '-color-2'}`}>{text}</a>
    </div>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired
};

export default Button;
