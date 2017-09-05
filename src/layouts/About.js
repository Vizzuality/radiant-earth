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
        <div className="l-about__staff">
          <div className="row">
            <h2
              className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
            >STAFF</h2>
            {this.staffContent.map((item, i) =>
              (<div className="columns large-6 medium-6 small-6" key={i.toString()}>
                <div className="l-about__staff-item">
                  <div className="contain-info">
                    <div className="img" style={{ backgroundImage: `url(${item.img})` }}>{}</div>
                    <div className="info">
                      <span className="text -ff2-xs -uppercase">{item.position}</span>
                      <h3 className="text -ff2-l -color-1">{item.name}</h3>
                    </div>
                  </div>
                  <div className="contain-text">
                    <p className="text -ff1-m">{item.text}</p>
                  </div>
                </div>
              </div>)
            )}
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
        <Footer />
      </div>
    );
  }
}

export default About;
