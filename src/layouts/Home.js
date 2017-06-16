import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="l-home">
          <div className="l-home__block l-home__summary">
            <div className="row align-center">
              <div className="small-12 medium-8 columns">
                <h1 className="text -ff2-xl -white"><span className="-underline">Earth Imagery for Impact</span></h1>
              </div>
              <div className="small-12 medium-8 columns">
                <div className="l-home__description text -ff1-m -white">Radiant Earth provides a geospatial and imagery technology platform that supports knowledge transfer to positively impact the developing world’s greatest social, economic and environmental challenges.</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  };
}

export default Home;
