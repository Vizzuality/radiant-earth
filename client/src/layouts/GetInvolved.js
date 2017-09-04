import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import Select from 'react-select-me';
import 'react-select-me/lib/ReactSelectMe.css';

class GetInvolved extends Component {

  constructor(props) {
    super(props);
    this.state = {
      country: null,
      area: null,
    };
  }

  onChangeCountry(country) {
    this.setState({
      country
    });
  }

  onChangeArea(area) {
    this.setState({
      area
    });
  }

  render() {
    const optionsCountry = [
      { value: 'spain', label: 'Spain' },
      { value: 'portugal', label: 'Portugal' },
      { value: 'france', label: 'France' },
    ];

    const optionsArea= [
      { value: '1', label: 'Area 1' },
      { value: '2', label: 'Area 2' },
      { value: '3', label: 'Area 3' },
    ];

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
                  <input className="c-input -text-field text -ff2-s" placeholder="ex: John Doe" />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">email address</label>
                  <input className="c-input -text-field text -ff2-s" placeholder="ex: email@organization.com" />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">country</label>
                  <Select
                    options={optionsCountry}
                    value={this.state.country}
                    onChange={this.onChangeCountry.bind(this)}
                  />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label className="text -ff2-xs -uppercase">area of interest</label>
                  <div className="contain-select">
                    <Select
                      options={optionsArea}
                      value={this.state.area}
                      onChange={this.onChangeArea.bind(this)}
                    />
                    <svg className="icon"><use xlinkHref="#icon-arrow-down"></use></svg>
                  </div>
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
