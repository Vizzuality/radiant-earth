import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';

class GetInvolved extends Component {

  render() {
    return (
      <div>
        <Header />

        <div className="l-get-involved">
          <div className="row ">

            <div className="columns large-6 medium-6 small-12">
              <BoxTitleContent
                title="Join our community in the creation of powerful insights and evidence-based support for change"
                text="If you are interested in participating, please fill out this form. We will notify you when new learning educational materials become available."
              />
            </div>
            <div className="columns large-6 medium-6 small-12 l-get-involved__form">
              <form className="row">
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">name</label>
                  <input className="c-input -text-field" placeholder="ex: John Doe" />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">email address</label>
                  <input className="c-input -text-field" placeholder="ex: email@organization.com" />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">country</label>
                  <input className="c-input -text-field" placeholder="Select a country" />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">area of interest</label>
                  <input className="c-input -text-field" placeholder="Select a country" />
                </div>
                <div className="columns mall-12 contain-button">
                  <button className="text -ff2-xs -uppercase c-button -back-orange">notify me</button>
                </div>
              </form>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
}

export default GetInvolved;
