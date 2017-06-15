import React, { Component } from 'react';
import facebook from '../images/footer/facebook.svg';
import instagram from '../images/footer/instagram.svg';
import linkedin from '../images/footer/linkedin.svg';
import medium from '../images/footer/medium.svg';
import twitter from '../images/footer/medium.svg';
import BillMelinda from '../images/footer/BillMelinda.svg';
import Omidyar from '../images/footer/Omidyar.svg';
import Vizzuality from '../images/footer/Vizzuality.svg';

class Footer extends Component {
  render() {
    return (
      <div className="c-footer">
        <div className="row">
          <div className="c-footer__partners-funders-container small-10 columns">
            <span className="text -ff2-xs -white -uppercase -center">We are working with funders and partners to accelerate open earth imagery technologies</span>
            <div className="c-footer_logos-container">
              <div className="row align-justify">
                <img className="c-footer__logos-item" src={Omidyar} />
                <img className="c-footer__logos-item" src={BillMelinda} />
                <img className="c-footer__logos-item" src={Vizzuality} />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="c-footer__newsletter-container small-6 columns align-self-middle">
            <span className="text -ff2-xs -white -uppercase -center">Subscribe to our newsletter to get latest news and updates</span>
            <form className="c-footer__newsletter-form">
              <input className="text -ff2-s -uppercase" type="email" value="youremail@domain.com" />
            </form>
          </div>
        </div>
        <div className="row">
          <div className="c-footer__social-networks-container small-4 columns align-self-middle">
            <div className="row align-justify">
              <img className="c-footer__logos-item" src={twitter} />
              <img className="c-footer__logos-item" src={linkedin} />
              <img className="c-footer__logos-item" src={facebook} />
              <img className="c-footer__logos-item" src={medium} />
              <img className="c-footer__logos-item" src={instagram} />
            </div>
            <span className="text -ff2-xs -white -center">Copyright © 2017 Radiant. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    )
  };
}

export default Footer;
