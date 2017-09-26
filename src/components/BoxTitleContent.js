import React from 'react';
import browser from 'detect-browser';
import PropTypes from 'prop-types';
import Dotdotdot from 'react-dotdotdot';
import Button from './Button';

function BoxTitleContent(props) {
  const browserSafari = browser.name === 'safari';
  const browserIOS = browser.name === 'ios';
  const { subTitle, text, buttonText, buttonUrl, title, url, dots } = props;
  return (
    <div className={`c-box-title-content ${browserSafari ? '-safari' : ''} ${browserIOS ? '-safari' : ''}`}>
      <div>
        {subTitle && <span className="text -ff2-xs -color-2 -uppercase">
          {subTitle}
        </span>}
        {title && !url && <h2 className="text -ff2-l -color-1">
          {title}
        </h2>}
        {title && url && <a href={url} target="_blank">
          <h2 className="text -ff2-l -color-1">{title}</h2>
        </a>}
        {text && dots && <Dotdotdot clamp={5}>
          <p className="text -ff1-m">
            {text}
          </p>
        </Dotdotdot>}
        {text && dots === false &&
          <p className="text -ff1-m">
            {text}
          </p>}
      </div>
      {buttonText && <div>
        <Button text={buttonText} url={buttonUrl} back="orange" />
      </div> }
    </div>
  );
}

BoxTitleContent.defaultProps = {
  subTitle: null,
  text: null,
  buttonText: null,
  buttonUrl: null,
  title: null,
  url: null,
  dots: false
};

BoxTitleContent.propTypes = {
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  dots: PropTypes.bool
};

export default BoxTitleContent;
