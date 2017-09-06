import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function BoxTitleContent(props) {
  const { subTitle, text, buttonText, buttonUrl, title } = props;
  return (
    <div className="c-box-title-content">
      <div>
        <span className="text -ff2-xs -color-2 -uppercase">
          {subTitle}
        </span>
        <h2 className="text -ff2-l -color-1">
          {title}
        </h2>
        <p className="text -ff1-m">
          {text}
        </p>
      </div>
      {buttonText && <div>
        <Button text={buttonText} url={buttonUrl} back="orange" />
      </div> }
    </div>
  );
}

BoxTitleContent.propTypes = {
  subTitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
  buttonUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default BoxTitleContent;
