import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import BoxCard from '../components/BoxCard';
import oneExplore from '../images/explorePage/1.png';
import twoExplore from '../images/explorePage/2.png';
import threeExplore from '../images/explorePage/3.png';

class Explore extends Component {

  constructor (props) {
    super(props);

    this.state = {
      slider: 0,
    };

    this.sliderContent = [
      {
        img: {oneExplore},
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the whole world, updated constantly.',
        text: 'Find free and timely imagery of anywhere on earth by searching popular open data sets like the Landsat and Sentinel archives.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
      {
        img: {twoExplore},
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the whole world, updated constantly. -2',
        text: 'Find free and timely imagery of anywhere on earth by searching popular open data sets like the Landsat and Sentinel archives.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
    ];
  }

  render() {
    return (
      <div>
        <Header />

        <div className="l-explore">
          <div className="l-explore__slider-content">
            <div className="row align-middle">
              <div className="l-explore__image columns large-6 medium-6 small-6">
                <div className="img"></div>
              </div>
              {this.sliderContent.map((item, i) =>
                <div key={i} className={`l-explore__content columns large-6 medium-6 small-6 ${i === this.state.slider ? '-show' : ''}`}>
                  <BoxTitleContent
                    subTitle={item.subTitle}
                    title={item.title}
                    text={item.text}
                    buttonText={item.buttonText}
                    buttonUrl={item.buttonUrl}
                  />
                </div>
              )}
            </div>
          </div>
          <div className="-back-white l-explore__api-content">
            <div className="row">
              <h3 className="text -ff2-xs -color-2 -uppercase columns large-12 medium-12 small-12">RADIANT.EARTH API</h3>
                <BoxCard
                  img={oneExplore}
                  title="Integrate geospatial data with your applications "
                  text="Providing the global community with the greatest collection of satellite data can help create powerful insights and evidence-based support for change."
                  buttonText="LEARN MORE"
                  buttonUrl="#"
                />
                <BoxCard
                  img={twoExplore}
                  title="Search accross global archives to find imagery that fits your needs"
                  text="Radiant.Earth aims to simplify the overall process of using satellite imagery."
                  buttonText="LEARN MORE"
                  buttonUrl="#"
                />
                <BoxCard
                  img={threeExplore}
                  title="Active monitoring"
                  text="Set areas of interest to actively monitor areas around the world as new imagery becomes available, or trigger automatic analyses."
                  buttonText="LEARN MORE"
                  buttonUrl="#"
                />
            </div>
          </div>

        </div>
        <Footer />
      </div>
    )
  };
}

export default Explore;
