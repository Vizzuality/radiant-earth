import 'react-select-me/lib/ReactSelectMe.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select-me';
import ScrollEvent from 'react-onscroll';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import { API_COUNTRIES } from '../global';

class GetInvolved extends Component {
  constructor(props) {
    super(props);
    this.state = {
      country: null,
      area: null,
      caseSlider: 0,
      countries: [],
      sticky: false,
    };

    this.getCountries = this.getCountries.bind(this);
  }

  componentDidMount() {
    this.getCountries();
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

  getCountries() {
    const self = this;
    fetch(`${API_COUNTRIES}all?fields=name`)
      .then(r => r.json())
      .then(data => self.setState({ countries: data }));
  }

  handleScrollCallback() {
    if (window.scrollY > 120) {
      this.setState({
        sticky: true
      });
    } else {
      this.setState({
        sticky: false
      });
    }
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

    const { caseSlider, sticky } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        <Helmet>
          <title>Radiant-Earth | Get Involved</title>
        </Helmet>
        <Header currentPath={pathname} />
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <div className={`l-get-involved ${sticky ? '-sticky' : ''}`}>
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
                <div className="tab-case-list">
                  {casesInformation.map((item, i) =>
                    (<button
                      onClick={() => this.changeSlider(i)}
                      key={i.toString()}
                      className={`text -ff2-s -uppercase ${i === caseSlider ? '-selected' : ''}`}
                    >
                      {item.title}
                    </button>)
                  )}
                </div>
              </div>
            </div>
            <div className="columns large-6 medium-12 small-12 l-get-involved__form">
              <form className="row">
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="name" className="text -ff2-xs -uppercase">name
                    <input
                      id="name"
                      name="name"
                      className="c-input -text-field text -ff2-s"
                      placeholder="ex: John Doe"
                    />
                  </label>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="email" className="text -ff2-xs -uppercase">email address
                    <input
                      id="email"
                      name="email"
                      className="c-input -text-field text -ff2-s"
                      placeholder="ex: email@organization.com"
                    />
                  </label>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="organization"
                    className="text -ff2-xs -uppercase"
                  >organization
                    <input
                      id="organization"
                      name="organization"
                      className="c-input -text-field text -ff2-s"
                      placeholder="ex: Organization"
                    />
                  </label>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label htmlFor="website" className="text -ff2-xs -uppercase">website
                    <input
                      id="website"
                      name="website"
                      className="c-input -text-field text -ff2-s"
                      placeholder="ex: website.com"
                    />
                  </label>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="country-select"
                    className="text -ff2-xs -uppercase"
                  >country
                    <div className="contain-select">
                      <Select
                        id="country-select"
                        options={optionsCountry}
                        value={this.state.country}
                        onChange={this.onChangeCountry.bind(this)}
                      />
                      <svg className="icon"><use xlinkHref="#icon-arrow-down">{}</use></svg>
                    </div>
                  </label>
                </div>
                <div className="columns large-6 medium-6 small-6">
                  <label
                    htmlFor="area-select"
                    className="text -ff2-xs -uppercase"
                  >area of interest
                    <div className="contain-select">
                      <Select
                        id="area-select"
                        options={optionsArea}
                        value={this.state.area}
                        onChange={this.onChangeArea.bind(this)}
                      />
                      <svg className="icon"><use xlinkHref="#icon-arrow-down">{}</use></svg>
                    </div>
                  </label>
                </div>
                <div className="columns small-12 contain-textarea">
                  <label
                    htmlFor="description"
                    className="text -ff2-xs -uppercase"
                  >Description
                    <textarea id="description" name="description" />
                  </label>
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

GetInvolved.propTypes = {
  location: PropTypes.object.isRequired,
};

export default GetInvolved;
