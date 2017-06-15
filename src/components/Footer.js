import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="c-footer">
        <div className="row">
          <div className="columns flex-container flex-dir-column">
            <div className="c-footer__logos-container">
              <span className="text -ff2-xs -white -uppercase -center">We are working with funders and partners to accelerate open earth imagery technologies</span>
              <div className="small-10 columns align-center">
                <div className="c-footer__logos-item small-2 columns"></div>
                <div className="c-footer__logos-item small-2 columns"></div>
                <div className="c-footer__logos-item small-2 columns"></div>
                <div className="c-footer__logos-item small-2 columns"></div>
              </div>
            </div>
            <div className="c-footer__newsletter-container small-6 align-self-middle">
              <span className="text -ff2-xs -white -uppercase -center">Subscribe to our newsletter to get latest news and updates</span>
              <form className="c-footer__newsletter-form">
                <input className="text -ff2-s -uppercase" type="email" value="youremail@domain.com" />
              </form>
            </div>
            <div className="c-footer__social-networks-container small-4 align-self-middle">
              <span className="text -ff2-xs -white -uppercase -center">Copyright © 2017 Radiant. All Rights Reserved.</span>
            </div>
          </div>
        </div>
      </div>
    )
  };
}

export default Footer;
