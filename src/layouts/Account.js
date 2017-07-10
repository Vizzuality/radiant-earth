import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';


class Account extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="row l-account">
        <div className="small-4 mediun-4 large-4">
          <ul className="l-account__list">
            <li className="text -ff2-s -uppercase -white">ACCOUNT</li>
            <li className="text -ff2-s -uppercase -white">API ACCESS TOKENS</li>
          </ul>
        </div>
        <div className="small-8 mediun-8 large-8 columns l-account__header">
          <h1 className="text -ff2-xl -white">Account</h1>
          <form className="l-account__form">
            <div className="l-acount__user">
              <div className="l-account__user-input">
                <label className="text -ff2-xs -uppercase -white">Name</label>
                <div className="l-account__edit-input">
                  <input className="text -ff2-s c-input -text-field -transparent -white" type="text" placeholder="John Doe"/>
                  <svg className="icon icon-edit"><use xlinkHref="#icon-edit"></use></svg>
                </div>
              </div>
              <div className="l-account__user-input">
                <label className="text -ff2-xs -uppercase -white">Email address</label>
                <div className="l-account__edit-input">
                  <input className="text -ff2-s c-input -text-field -transparent -white" type="email" placeholder="email@organization.com"/>
                  <svg className="icon icon-edit"><use xlinkHref="#icon-edit"></use></svg>
                </div>
              </div>
            </div>
            <h1 className="text -ff2-xl -white">API access tokens</h1>
            <div className="l-account__token">
              <label className="text -ff2-xs -uppercase -white">Default public token</label>
              <div className="l-account__token-input">
                <input className="text -ff2-s c-input -text-field -transparent -white" type="email" placeholder="pk.eyJ1IjoiZm9yZXN0d2F0Y2hlciIsImEiOiJj…"/>
                <svg className="icon icon-copy"><use xlinkHref="#icon-content_copy"></use></svg>
              </div>
            </div>
            <input className="text -ff2-s -uppercase c-button -white" type="button" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
      </div>
    )
  };
}

export default Account;
