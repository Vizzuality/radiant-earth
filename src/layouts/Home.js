import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import illustration1 from '../images/home/illustration-1@2X.png';

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
          <div className="l-home__block l-home__example">
            <div className="row">
              <div className="small-12 medium-6 columns">
                <div className="l-home__example-text">
                  <div className="row">
                    <div className="small-12 columns text -ff2-xs -color-2 -uppercase">Radiant earth api</div>
                    <div className="small-12 columns l-home__example-text-2 text -ff2-l -white">Integrate geospatial data with your applications</div>
                    <div className="small-12 columns l-home__example-text-3 text -ff1-m -white">Providing the global community with the greatest collection of satellite data can help create powerful insights and evidence-based support for change.</div>
                  </div>
                </div>
              </div>
              <div className="small-12 medium-6 columns l-home__example-img-container">
                <img src={illustration1} />
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
