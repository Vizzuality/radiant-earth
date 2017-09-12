import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

import image1 from '../images/home/cover/1.jpg';
import image2 from '../images/home/cover/2.jpg';
import image3 from '../images/home/cover/3.jpg';
import image4 from '../images/home/cover/4.jpg';
import image5 from '../images/home/cover/5.jpg';

import anne from '../images/team/bios_anne.jpg';
import dan from '../images/team/bios_dan.jpg';
import anthony from '../images/team/bios_anthony.jpg';

import peter from '../images/team/bios_peter.png';
import sanjay from '../images/team/bios_sanjay.png';
import margie from '../images/team/bios_margie.png';

import esa from '../images/about/logos/esa.png';
import nasa from '../images/about/logos/nasa.jpg';
import unitar from '../images/about/logos/unitar.png';
import newAmerica from '../images/about/logos/newAmerica.png';
import azavea from '../images/about/logos/azavea.png';
import vizzuality from '../images/about/logos/vizzuality.png';

class About extends Component {
  constructor(props) {
    super(props);

    this.staffContent = [
      {
        img: anne,
        position: 'CEO, Radiant.Earth',
        name: 'Anne Hale Miglarese',
        text: 'Anne Hale Miglarese, founding CEO of Radiant, is committed to providing geospatial analytics using imagery and mapping data to empower informed decision-making to help solve the developing world’s greatest social, economic and environmental challenges. Read more',
      },
      {
        img: dan,
        position: 'Chief Technology Officer',
        name: 'Dan Lopez',
        text: 'Dan Lopez is an innovative entrepreneur and architect who has advised a wide variety of web-centric businesses and brands by lending his creative, strategic and technological vision. Read more',
      },
      {
        img: anthony,
        position: '...',
        name: 'Anthony Burn',
        text: 'Anthony Burn is passionate about harnessing the full power of GIS enabled data across multiple platforms, to transform individual lives and whole societies for the better. Read more',
      },
    ];

    this.boardContent = [
      {
        img: anne,
        position: 'CEO, Radiant.Earth',
        name: 'Anne Hale Miglarese',
      },
      {
        img: peter,
        position: 'Venture Partner, Omidyar Network',
        name: 'Peter Rabley',
      },
      {
        img: sanjay,
        position: 'CEO, Geospatial Media & Communications',
        name: 'Sanjay Kumar',
      },
      {
        img: margie,
        position: 'CEO, Sullivan Strategy',
        name: 'Margie Sullivan',
      },
    ];
  }

  render() {
    return (
      <div className="l-about">
        <Header />
        <div className="l-about__cover">
          <div className="l-about__circle-image -image-1" style={{ backgroundImage: `url(${image1})` }}>{}</div>
          <div className="l-about__circle-image -image-2" style={{ backgroundImage: `url(${image2})` }}>{}</div>
          <div className="l-about__circle-image -image-3" style={{ backgroundImage: `url(${image3})` }}>{}</div>
          <div className="l-about__circle-image -image-4" style={{ backgroundImage: `url(${image4})` }}>{}</div>
          <div className="l-about__circle-image -image-5" style={{ backgroundImage: `url(${image5})` }}>{}</div>
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
          <div className="columns l-about__information-text">
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
        </div>
        <div className="l-about__board">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >BOARD</h2>
            {this.boardContent.map((item, i) =>
              (<div
                key={i.toString()}
                className="l-about__board-item columns large-3 medium-3 small-3"
              >
                <div className="img" style={{ backgroundImage: `url(${item.img})` }}>{}</div>
                <span className="text -ff2-xs -uppercase">{item.position}</span>
                <h3 className="text -ff2-l -color-1">{item.name}</h3>
              </div>)
            )}
          </div>
        </div>
        <div className="l-about__logos">
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">data providers</h4>
            <div className="row align-middle">
              <a className="columns small-3 link-logo" href="http://www.esa.int/ESA" target="_blank" rel="noopener noreferrer">
                <img alt="ESA" className="l-about__logos-item -esa" src={esa} />
              </a>
              <a className="columns small-3 link-logo" href="https://www.nasa.gov/" target="_blank" rel="noopener noreferrer">
                <img alt="NASA" className="l-about__logos-item -nasa" src={nasa} />
              </a>
            </div>
          </div>
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">Partners</h4>
            <div className="row align-middle">
              <a className="columns small-3 link-logo" href="http://www.unitar.org/" target="_blank" rel="noopener noreferrer">
                <img alt="Unitar" className="l-about__logos-item" src={unitar} />
              </a>
              <a className="columns small-3 link-logo" href="http://www.esa.int/ESA" target="_blank" rel="noopener noreferrer">
                <img alt="ESA"className="l-about__logos-item -esa" src={esa} />
              </a>
              <a className="columns small-3 link-logo" href="https://www.newamerica.org/" target="_blank" rel="noopener noreferrer">
                <img alt="New America" className="l-about__logos-item" src={newAmerica} />
              </a>
            </div>
          </div>
          <div className="l-about__logos-container">
            <h4 className="text -ff2-xs -uppercase -color-2 row columns">Collaborators</h4>
            <div className="row align-middle">
              <a className="columns small-3 link-logo" href="https://www.azavea.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Azavea" className="l-about__logos-item" src={azavea} />
              </a>
              <a className="columns small-3 link-logo -vizzuality" href="http://www.vizzuality.com/" target="_blank" rel="noopener noreferrer">
                <img alt="Vizzuality" className="l-about__logos-item" src={vizzuality} />
              </a>
            </div>
          </div>
        </div>
        <div className="l-about__contact">
          <div className="row">
            <h4 className="text -ff2-xs -uppercase -color-2 small-12 columns">Contact</h4>
            <div className="l-about__contact-text small-6 columns">
              <div>
                <p className="text -ff2-m">740 15th Street, Suite 900</p>
                <p className="text -ff2-m">Washington, DC 20005</p>
              </div>
              <div>
                <p className="text -ff2-m">Email: <a className="text -color-1" href="mailto:hello@radiant.earth">hello@radiant.earth</a></p>
                <p className="text -ff2-m">Phone: <a className="text -color-1" href="tel:+1.2020.596.3603">+1.2020.596.3603</a></p>
              </div>
            </div>
            <div className="l-about__contact-map small-6">{}</div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
