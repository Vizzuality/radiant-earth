import React from 'react';
import PropTypes from 'prop-types';

function BoxModal(props) {
  const { show, openModal } = props;
  return (
    <div className="c-box-modal">
      <div className={`c-box-modal__back ${show ? '-show' : ''}`} role="button" tabIndex={-1} onClick={openModal}>{}</div>
      <div className={`c-box-modal__container ${show ? '-show' : ''}`}>
        <form>
          <svg className="icon" onClick={openModal}>
            <use xlinkHref="#icon-close">{}</use>
          </svg>
          <div className="contain-input">
            <label htmlFor="email" className="text -ff2-xs -uppercase">Name
              <input
                id="email"
                name="email"
                className="c-input -text-field text -ff2-s"
                placeholder="ex: email@organization.com"
              />
            </label>
          </div>
          <div className="contain-input">
            <label htmlFor="text" className="text -ff2-xs -uppercase">Text
              <textarea className="text -ff2-s" name="text" id="text" />
            </label>
          </div>
          <div className="contain-button">
            <button
              className="c-button text -ff2-xs -color-2 -uppercase -back-orange"
            >Submit request</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BoxModal;
