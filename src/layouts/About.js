import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Footer from '../components/Footer';
import MotionCircle from '../components/MotionCircle';

import image1 from '../images/home/cover/1.jpg';
import image2 from '../images/home/cover/2.jpg';
import image3 from '../images/home/cover/3.jpg';
import image4 from '../images/home/cover/4.jpg';
import image5 from '../images/home/cover/5.jpg';

import esa from '../images/about/logos/esa.png';
import nasa from '../images/about/logos/nasa.jpg';
import unitar from '../images/about/logos/unitar.png';
import newAmerica from '../images/about/logos/newAmerica.png';
import azavea from '../images/about/logos/azavea.png';
import vizzuality from '../images/about/logos/vizzuality.png';

function About(props) {
  const { pathname } = props.location;
  return (
    <div className="l-about">
      <Header currentPath={pathname} />
      <div className="l-about__cover">
        <div className="l-about__circle-image -image-1"><MotionCircle width="572" backgroundImage={image1} /></div>
        <div className="l-about__circle-image -image-2"><MotionCircle width="150" backgroundImage={image2} /></div>
        <div className="l-about__circle-image -image-3"><MotionCircle width="360" backgroundImage={image3} /></div>
        <div className="l-about__circle-image -image-4"><MotionCircle width="284" backgroundImage={image4} /></div>
        <div className="l-about__circle-image -image-5"><MotionCircle width="422" backgroundImage={image5} /></div>
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
          <h2 className="text -ff1-l -color-1">Our Purpose</h2>
          <p
            className="text -ff1-m"
          >We like to think of Radiant.Earth as a launch pad. But instead of a rocket lifting into
          space, we propel people in the global development
          community into an illuminated world of Earth imagery,
          data, visualizations, and analytical tools, all
          fueling new discoveries, solutions, and innovation.
          </p>
          <p
            className="text -ff1-m"
          >Just as rockets enable the unique perspective of
          looking at the Earth from space, Radiant.Earth enables
          users to explore an unlimited number of Earth
          imagery-related resources via an open and neutral pathway,
          meaning that these resources may be publicly or
          commercially available.</p>
          <p
            className="text -ff1-m"
          >How we plan to propel the global development community Radiant.Earth
          is aggregating the world’s open Earth imagery
          and providing access and education on its use
          to the global development community.</p>
          <p
            className="text -ff1-m"
          >At the center of Radiant.Earth is an open
          technology platform that will help people
          discover and analyze the vast resources of
          Earth imagery, accelerating improved
          decision-making and fueling new solutions,
          discoveries and innovations. </p>
          <p
            className="text -ff1-m"
          >In support of this user-driven platform,
          Radiant.Earth offers an integrated and robust
          community development program to guide people
          in the use of imagery, geospatial data sets
          and tools. This includes insights into the
          commercial marketplace and related policies.
          </p>
        </div>
        <div className="l-about__contact small-12 medium-12 large-6 columns">
          <div className="contain-contact">
            <div className="contain-contact-text">
              <h4 className="text -ff2-xs -uppercase -color-2 columns">Contact</h4>
              <div className="l-about__contact-text columns">
                <div>
                  <p className="text -ff2-m">740 15th Street, Suite 900</p>
                  <p className="text -ff2-m">Washington, DC 20005</p>
                </div>
                <div>
                  <p className="text -ff2-m">Email: <a className="text -color-1" href="mailto:hello@radiant.earth">hello@radiant.earth</a></p>
                  <p className="text -ff2-m">Phone: <a className="text -color-1" href="tel:+1.2020.596.3603">+1.2020.596.3603</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="l-about__logos">
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
      <Footer />
    </div>
  );
}

About.propTypes = {
  location: PropTypes.object.isRequired,
};

export default About;
