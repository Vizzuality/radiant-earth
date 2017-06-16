import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="c-footer">
        <div className="row small-up-1 medium-up-10 large-up-10">
          <div className="c-footer__partners-funders-container small-10 columns">
            <span className="text -ff2-xs -white -uppercase -center">We are working with funders and partners to accelerate open earth imagery technologies</span>
            <div className="c-footer_logos-container">
              <div className="row align-justify">
                <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-Omidyar"></use></svg>
                <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-BillnMelinda"></use></svg>
                <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-Vizzuality"></use></svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row small-up-1 medium-up-2 large-up-2">
          <div className="c-footer__newsletter-container small-6 columns align-self-middle">
            <span className="text -ff2-xs -white -uppercase -center">Subscribe to our newsletter to get latest news and updates</span>
            <form className="c-footer__newsletter-form">
              <svg className="icon icon-logo"><use xlinkHref="#icon-arrow"></use></svg>
              <input className="text -ff2-s -uppercase" type="email" value="youremail@domain.com" />
            </form>
          </div>
        </div>
        <div className="row small-up-2 medium-up-2 large-up-3">
          <div className="c-footer__social-networks-container small-4 columns align-self-middle">
            <div className="row align-justify">
              <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-twitter"></use></svg>
              <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-linkedin"></use></svg>
              <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-facebook"></use></svg>
              <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-medium"></use></svg>
              <svg className="icon icon-logo c-footer__logos-item"><use xlinkHref="#icon-instagram"></use></svg>
            </div>
            <span className="text -ff2-xs -white -center">Copyright © 2017 Radiant. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    )
  };
}

export default Footer;
