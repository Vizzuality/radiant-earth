import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollEvent from 'react-onscroll';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MotionCircle from '../components/MotionCircle';
import { API_BASE_URL } from '../global';

import image1 from '../images/home/cover/1.jpg';
import image2 from '../images/home/cover/2.jpg';
import image3 from '../images/home/cover/3.jpg';
import image4 from '../images/home/cover/4.jpg';
import image5 from '../images/home/cover/5.jpg';
import image6 from '../images/home/cover/6.jpg';
import image7 from '../images/home/cover/1-sub.jpg';

import esa from '../images/about/logos/esa.png';
import nasa from '../images/about/logos/nasa.jpg';
import unitar from '../images/about/logos/unitar.png';
import newAmerica from '../images/about/logos/newAmerica.png';
import azavea from '../images/about/logos/azavea.png';
import vizzuality from '../images/about/logos/vizzuality.png';
import gates from '../images/about/logos/gates.svg.png';
import omidyar from '../images/about/logos/omidyar.jpg';

class About extends Component {
  constructor(props) {
    super(props);

    this.state = {
      vacancies: [],
      sticky: false,
    };

    this.getVacancies = this.getVacancies.bind(this);
  }

  componentDidMount() {
    this.getVacancies();
  }

  getVacancies() {
    const self = this;
    fetch(`${API_BASE_URL}/vacancies`)
      .then(r => r.json())
      .then(data => self.setState({
        vacancies: data,
      }));
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

  render() {
    const { pathname } = this.props.location;
    const { vacancies, sticky } = this.state;
    return (
      <div className="l-about">
        <Helmet>
          <title>Radiant.Earthh | About</title>
        </Helmet>
        <Header currentPath={pathname} />
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <div className={`l-about__cover ${sticky ? '-sticky' : ''}`}>
          <div className="l-about__circle-image -image-1"><MotionCircle width="572" backgroundImage={image1} /></div>
          <div className={`l-about__circle-image -image-2 ${sticky ? '-sticky' : ''}`}><MotionCircle width="150" backgroundImage={image2} /></div>
          <div className="l-about__circle-image -image-3"><MotionCircle width="360" backgroundImage={image3} /></div>
          <div className="l-about__circle-image -image-4"><MotionCircle width="284" backgroundImage={image4} /></div>
          <div className="l-about__circle-image -image-5"><MotionCircle width="422" backgroundImage={image5} /></div>
          <div className={`l-about__circle-image -image-6 ${sticky ? '-sticky' : ''}`}><MotionCircle width="344" backgroundImage={image6} /></div>
          <div className="l-about__circle-image -image-7"><MotionCircle width="344" backgroundImage={image7} /></div>
          <div className="row">
            <div className="columns large-12 medium-12 small-12 title">
              <h1 className="text -ff2-xl -color-1">Open geospatial data for positive impact</h1>
              <p
                className="text -ff1-m"
              >Connecting people globally to Earth imagery, geospatial data, tools
              and knowledge to meet the world’s most critical challenges.</p>
            </div>
          </div>
        </div>
        <div className="l-about__information row">
          <div className="columns small-12 medium-12 large-6 l-about__information-text">
            <div className="separator">
              <h2 className="text -ff1-l -color-1">Vision</h2>
              <p className="text -ff1-m">Open geospatial data for positive impact</p>
            </div>
            <div className="separator">
              <h2 className="text -ff1-l -color-1">Mission</h2>
              <p className="text -ff1-m">Connecting people globally to Earth imagery, geospatial data, tools and knowledge to meet the world’s most critical challenges.</p>
            </div>
            <div className="separator">
              <h2 className="text -ff1-l -color-1">Our Purpose</h2>
              <p className="text -ff1-m">We like to think of Radiant.Earth as a launch pad.  But instead of a rocket lifting into space, we propel people in the global development community into an illuminated world of Earth imagery, data, visualizations, and analytical tools, all fueling new discoveries, solutions, and innovation.</p>
              <p className="text -ff1-m">Just as rockets enable the unique perspective of looking at the Earth from space, Radiant.Earth enables users to explore an unlimited number of Earth imagery-related resources via an open and neutral pathway, meaning that these resources may be publicly or commercially available.</p>
              <p className="text -ff1-m"><strong>How we plan to propel the global development community</strong><br />Radiant.Earth is aggregating the world’s open Earth imagery and providing access and education on its use to the global development community.</p>
              <p className="text -ff1-m">At the center of Radiant.Earth is an open technology platform that will help people discover and analyze the vast resources of Earth imagery, accelerating improved decision-making and fueling new solutions, discoveries and innovations.</p>
              <p className="text -ff1-m">In support of this user-driven platform, Radiant.Earth offers an integrated and robust community development program to guide people in the use of imagery, geospatial data sets and tools. This includes insights into the commercial marketplace and related policies.</p>
            </div>
          </div>
        </div>
        <div className="l-about__logos">
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">Funders</h4>
            <div className="row align-middle">
              <a className="columns small-6 medium-3 link-logo -small" href="https://www.gatesfoundation.org/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${gates})` }}>{}</a>
              <a className="columns small-6 medium-3 link-logo" href="https://www.omidyar.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${omidyar})` }}>{}</a>
            </div>
          </div>
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">data providers</h4>
            <div className="row align-middle">
              <a className="columns small-6 medium-3 link-logo" href="http://www.esa.int/ESA" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${esa})` }}>{}</a>
              <a className="columns small-6 medium-3 link-logo" href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${nasa})` }}>{}</a>
            </div>
          </div>
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">Partners</h4>
            <div className="row align-middle">
              <a className="columns small-6 medium-3 link-logo" href="http://www.unitar.org/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${unitar})` }}>{}</a>
              <a className="columns small-6 medium-3 link-logo" href="http://www.esa.int/ESA" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${esa})` }}>{}</a>
              <a className="columns small-6 medium-3 link-logo -small" href="https://www.newamerica.org/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${newAmerica})` }}>{}</a>
            </div>
          </div>
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">Collaborators</h4>
            <div className="row align-middle">
              <a className="columns small-6 medium-3 link-logo -small" href="https://www.azavea.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${azavea})` }}>{}</a>
              <a className="columns small-6 medium-3 link-logo -small -vizzuality" href="http://www.vizzuality.com/" target="_blank" rel="noopener noreferrer" style={{ backgroundImage: `url(${vizzuality})` }}>{}</a>
            </div>
          </div>
        </div>
        <div className="l-about__vacancies">
          <div className="row">
            <div className="small-12 medium-12 large-12 columns">
              <h4 className="text -ff2-xs -uppercase -color-2 row columns">Careers</h4>
              <ul>
                {vacancies.map((item, i) =>
                  <li key={i.toString()}><a className="text -color-1" href={item.url} target="_blank">{item.title}</a></li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

About.propTypes = {
  location: PropTypes.object.isRequired,
};

export default About;
