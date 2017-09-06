import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import BoxCard from '../components/BoxCard';
import oneExplore from '../images/explorePage/1.png';
import twoExplore from '../images/explorePage/2.png';
import threeExplore from '../images/explorePage/3.png';

import oneSlider from '../images/explorePage/1_slider.png';
import twoSlider from '../images/explorePage/2_slider.png';
import threeSlider from '../images/explorePage/3_slider.png';

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
      showModal: false,
    };

    this.sliderContent = [
      {
        img: oneSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the whole world, updated constantly.',
        text: 'Find free and timely imagery of anywhere on earth by searching popular open data sets like the Landsat and Sentinel archives.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
      {
        img: twoSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the whole world, updated constantly. -2',
        text: 'Find free and timely imagery of open data sets like the Landsat and Sentinel archives.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
      {
        img: threeSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the whole world, updated constantly. -3',
        text: 'Find free and timely imagery of anywhere on earth by searching popular open data sets like the Landsat and Sentinel archives.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
    ];
  }

  changeSlider(slider) {
    this.setState({
      slider,
    });
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { slider, showModal } = this.state;
    return (
      <div>
        <Header />
        <div className="l-explore">
          <div className="l-explore__slider-content">
            <div className="row align-middle">
              <div className="l-explore__image columns large-6 medium-6 small-6">
                {this.sliderContent.map((item, i) =>
                  (<div
                    key={i.toString()}
                    className={`img ${i === slider ? '-show' : '-hidden'}`}
                    style={{ backgroundImage: `url(${item.img})` }}
                  >
                    {}
                  </div>)
                )}
              </div>
              <div className="l-explore__content columns large-6 medium-6 small-6">
                {this.sliderContent.map((item, i) =>
                  (<div key={i.toString()} className={`box-container ${i === slider ? '-show' : '-hidden'}`}>
                    <BoxTitleContent
                      subTitle={item.subTitle}
                      title={item.title}
                      text={item.text}
                    />
                    <div className="container-buttons">
                      <button
                        onClick={() => this.showModal()}
                        className="c-button -back-gray text -ff2-m -uppercase -gray"
                      >REQUEST ACCESS</button>
                      <div className="c-button -back-orange">
                        <a className="text -ff2-m -color-2 -uppercase -white" href="https://app.radiant.earth/login" target="_blank" rel="noopener noreferrer">login</a>
                      </div>
                    </div>
                  </div>)
                )}
              </div>
              <ul className="l-explore__circle-container columns large-12 medium-12 small-12 ">
                {this.sliderContent.map((item, i) =>
                  (<button key={i.toString()} onClick={() => this.changeSlider(i)}>
                    <li className={`circle ${i === slider ? '-active' : ''}`}>{}</li>
                  </button>)
                )}
              </ul>
            </div>
          </div>
          <div className="-back-white l-explore__api-content">
            <div className="row">
              <h3
                className="text -ff2-xs -color-2 -uppercase columns large-12 medium-12 small-12"
              >RADIANT.EARTH API
              </h3>
              <BoxCard
                img={oneExplore}
                title="Integrate geospatial data with your applications "
                text="Providing the global community with the greatest collection of satellite
                data can help create powerful insights and evidence-based support for change."
                buttonText="LEARN MORE"
                buttonUrl="#"
              />
              <BoxCard
                img={twoExplore}
                title="Search accross global archives to find imagery that fits your needs"
                text="Radiant.Earth aims to simplify the overall
                process of using satellite imagery."
                buttonText="LEARN MORE"
                buttonUrl="#"
              />
              <BoxCard
                img={threeExplore}
                title="Active monitoring"
                text="Set areas of interest to actively monitor areas around the world
                as new imagery becomes available, or trigger automatic analyses."
                buttonText="LEARN MORE"
                buttonUrl="#"
              />
            </div>
          </div>
          { showModal &&
            <div
              className="l-explore__modal-back"
              onClick={() => this.showModal()}
              role="button"
              tabIndex={0}
            >{}</div>
          }
          { showModal && <div className="l-explore__modal-resquest">
            <form>
              <svg className="icon" onClick={() => this.showModal()}>
                <use xlinkHref="#icon-close">{}</use>
              </svg>
              <div className="contain-input">
                <label htmlFor="email" className="text -ff2-xs -uppercase">Name
                  <input
                    id="email"
                    name="email"
                    className="c-input -text-field text -ff2-s"
                    placeholder="ex: email@organization.com"
                  />
                </label>
              </div>
              <div className="contain-input">
                <label htmlFor="text" className="text -ff2-xs -uppercase">Text
                  <textarea className="text -ff2-s" name="text" id="text" />
                </label>
              </div>
              <div className="contain-button">
                <button
                  className="c-button text -ff2-m -color-2 -uppercase -back-orange"
                >Submit request</button>
              </div>
            </form>
          </div> }

        </div>
        <Footer />
      </div>
    );
  }
}

export default Explore;
