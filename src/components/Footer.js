import React, { Component } from 'react';
import imageTest from '../images/testImage.png';

class Footer extends Component {
  render() {
    return (
      <div className="c-footer">

          <div className="row">
            <div className="c-footer__partners-funders-container columns">
              <span className="text -ff2-xs -white -uppercase -center">We are working with funders and partners to accelerate open earth imagery technologies</span>
            </div>
          </div>

          <div className="row">
            <div className="c-footer_logos-container small-10 flex-container align-justify">
              <div className="c-footer__logos-item small-2">
                <img src={imageTest} />
              </div>
              <div className="c-footer__logos-item small-2">
                <img src={imageTest} />
              </div>
              <div className="c-footer__logos-item small-2">
                <img src={imageTest} />
              </div>
              <div className="c-footer__logos-item small-2">
                <img src={imageTest} />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="c-footer__newsletter-container small-6 align-self-middle">
              <span className="text -ff2-xs -white -uppercase -center">Subscribe to our newsletter to get latest news and updates</span>
              <form className="c-footer__newsletter-form">
                <input className="text -ff2-s -uppercase" type="email" value="youremail@domain.com" />
              </form>
            </div>
          </div>

          <div className="row">
            <div className="c-footer__social-networks-container small-4 align-self-middle">
              <span className="text -ff2-xs -white -uppercase -center">Copyright © 2017 Radiant. All Rights Reserved.</span>
            </div>
          </div>

      </div>
    )
  };
}

export default Footer;
