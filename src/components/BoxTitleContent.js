import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

function BoxTitleContent(props) {
  const { subTitle, text, buttonText, buttonUrl, title } = props;
  return (
    <div className="c-box-title-content">
      <div>
        {subTitle && <span className="text -ff2-xs -color-2 -uppercase">
          {subTitle}
        </span>}
        {title && <h2 className="text -ff2-l -color-1">
          {title}
        </h2>}
        {text && <p className="text -ff1-m">
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
  title: null
};

BoxTitleContent.propTypes = {
  subTitle: PropTypes.string,
  text: PropTypes.string,
  buttonText: PropTypes.string,
  buttonUrl: PropTypes.string,
  title: PropTypes.string
};

export default BoxTitleContent;
