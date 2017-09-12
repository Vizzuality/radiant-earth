import React from 'react';
import billMelinda from '../images/footer/billMelinda.png';
import omidyar from '../images/footer/omidyar.png';


function Footer() {
  return (
    <div className="c-footer">
      <div className="row">
        <div className="c-footer__logos columns large-6 medium-6 small-12">
          <div className="c-footer__logos-container">
            <h4 className="text -ff2-xs -uppercase -white">Funders</h4>
            <div className="row align-middle">
              <a className="columns small-4 link-logo" href="http://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer">
                <img alt="Bill & Melinda" className="c-footer__logos-item" src={billMelinda} />
              </a>
              <a className="columns small-4 link-logo" href="https://www.omidyar.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Omidyar" className="c-footer__logos-item" src={omidyar} />
              </a>
            </div>
          </div>
        </div>
        <div className="c-footer__social columns large-6 medium-6 small-12">
          <div className="c-footer__social-container">
            <h4 className="text -ff2-xs -uppercase -white">Subscribe to our newsletter</h4>
            <form className="c-footer__newsletter-form">
              <svg className="icon icon-logo"><use xlinkHref="#icon-arrow">{}</use></svg>
              <input
                className="text -ff2-s -uppercase"
                type="email"
                placeholder="youremail@domain.com"
              />
            </form>
          </div>
          <div className="c-footer__social-container">
            <h4
              className="text -ff2-xs -uppercase -white"
            >or follow us to get the latest updates</h4>
            <div className="row align-justify">
              <a className="columns small-2" href="https://twitter.com/ourradiantearth" target="_blank" rel="noopener noreferrer">
                <svg className="icon icon-logo c-footer__logos-item">
                  <use xlinkHref="#icon-twitter">{}</use>
                </svg>
              </a>
              <a className="columns small-2" href="https://www.linkedin.com/company-beta/11020837/" target="_blank" rel="noopener noreferrer">
                <svg className="icon icon-logo c-footer__logos-item">
                  <use xlinkHref="#icon-linkedin">{}</use></svg>
              </a>
              <a className="columns small-2" href="https://www.facebook.com/OurRadiantEarth" target="_blank" rel="noopener noreferrer">
                <svg className="icon icon-logo c-footer__logos-item">
                  <use xlinkHref="#icon-facebook">{}</use></svg>
              </a>
              <a className="columns small-2" href="https://medium.com/@ourradiantearth" target="_blank" rel="noopener noreferrer">
                <svg className="icon icon-logo c-footer__logos-item">
                  <use xlinkHref="#icon-medium">{}</use></svg>
              </a>
              <a className="columns small-2" href="https://www.instagram.com/OurRadiantEarth/" target="_blank" rel="noopener noreferrer">
                <svg className="icon icon-logo c-footer__logos-item">
                  <use xlinkHref="#icon-instagram">{}</use></svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
