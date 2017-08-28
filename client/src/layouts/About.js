import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class About extends Component {
  render() {
    return (
      <div className="l-about">
        <Header />
        <div className="l-about__cover">
          <div className="row">
            <div className="columns large-12 medium-12 small-12 title">
              <h1 className="text -ff2-xl -color-1">Open geospatial data for positive impact</h1>
              <p className="text -ff1-m">Connecting people globally to Earth imagery, geospatial data, tools and knowledge to meet the world’s most critical challenges.</p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
