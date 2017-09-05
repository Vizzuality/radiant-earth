import 'react-select-me/lib/ReactSelectMe.css';
import React, { Component } from 'react';
import Select from 'react-select-me';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';

class GetInvolved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      area: null,
      caseSlider: 0,
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

  changeSlider(caseSlider) {
    this.setState({
      caseSlider
    });
  }

  render() {
    const optionsCountry = [
      { value: 'spain', label: 'Spain' },
      { value: 'portugal', label: 'Portugal' },
      { value: 'france', label: 'France' },
    ];

    const optionsArea = [
      { value: '1', label: 'Area 1' },
      { value: '2', label: 'Area 2' },
      { value: '3', label: 'Area 3' },
    ];

    const casesInformation = [
      {
        title: '#case1',
        titleText: '#case1 | Join our community in the creation of powerful insights and evidence-based support for change',
        text: 'If you are interested in participating, please fill out this form. We will notify you when new learning educational materials become available.'
      },
      {
        title: '#case2',
        titleText: '#case2 | Join our community in the creation of powerful insights and evidence-based support for change',
        text: 'If you are interested in participating, please fill out this form. We will notify you when new learning educational materials become available.'
      },
      {
        title: '#case3',
        titleText: '#case3 | Join our community in the creation of powerful insights and evidence-based support for change',
        text: 'If you are interested in participating, please fill out this form. We will notify you when new learning educational materials become available.'
      },
    ];

    const { caseSlider } = this.state;

    return (
      <div>
        <Header />
        <div className="l-get-involved">
          <div className="row ">

            <div className="columns large-6 medium-12 small-12">
              <div>
                {casesInformation.map((item, i) =>
                  (<div
                    className={`${i === caseSlider ? 'show-box' : 'hidden-box'}`}
                    key={i.toString()}
                  >
                    <BoxTitleContent
                      title={item.titleText}
                      text={item.text}
                    />
                  </div>)
                )}
              </div>
              <div className="l-get-involved__tab-case">
                <ul>
                  {casesInformation.map((item, i) =>
                    (<li
                      onClick={() => this.changeSlider(i)}
                      key={i.toString()}
                      className={`text -ff2-s -uppercase ${i === caseSlider ? '-selected' : ''}`}
                    >{item.title}</li>)
                  )}
                </ul>
              </div>
            </div>
            <div className="columns large-6 medium-12 small-12 l-get-involved__form">
              <form className="row">
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="name" className="text -ff2-xs -uppercase">name</label>
                  <input
                    name="name"
                    className="c-input -text-field text -ff2-s"
                    placeholder="ex: John Doe"
                  />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="name" className="text -ff2-xs -uppercase">email address</label>
                  <input
                    name="email"
                    className="c-input -text-field text -ff2-s"
                    placeholder="ex: email@organization.com"
                  />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="organization"
                    className="text -ff2-xs -uppercase"
                  >organization</label>
                  <input
                    name="organization"
                    className="c-input -text-field text -ff2-s"
                    placeholder="ex: Organization"
                  />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="website" className="text -ff2-xs -uppercase">website</label>
                  <input
                    name="website"
                    className="c-input -text-field text -ff2-s"
                    placeholder="ex: website.com"
                  />
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="country-select"
                    className="text -ff2-xs -uppercase"
                  >country</label>
                  <div className="contain-select">
                    <Select
                      options={optionsCountry}
                      value={this.state.country}
                      onChange={this.onChangeCountry.bind(this)}
                    />
                    <svg className="icon"><use xlinkHref="#icon-arrow-down">{}</use></svg>
                  </div>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="area-select"
                    className="text -ff2-xs -uppercase"
                  >area of interest</label>
                  <div className="contain-select">
                    <Select
                      options={optionsArea}
                      value={this.state.area}
                      onChange={this.onChangeArea.bind(this)}
                    />
                    <svg className="icon"><use xlinkHref="#icon-arrow-down">{}</use></svg>
                  </div>
                </div>
                <div className="columns small-12 contain-textarea">
                  <label
                    htmlFor="description"
                    className="text -ff2-xs -uppercase"
                  >Description</label>
                  <textarea name="description" />
                </div>
                <div className="columns mall-12 contain-button">
                  <button
                    className="text -ff2-xs -uppercase c-button -back-orange"
                  >notify me</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default GetInvolved;
