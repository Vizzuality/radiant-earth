import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-touch';
import ScrollEvent from 'react-onscroll';
import { Helmet } from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import BoxCard from '../components/BoxCard';
import BoxModal from '../components/BoxModal';

import oneExplore from '../images/explorePage/1.png';
import twoExplore from '../images/explorePage/2.png';
import threeExplore from '../images/explorePage/3.png';
import oneSlider from '../images/explorePage/1_slider.png';
import twoSlider from '../images/explorePage/2_slider.jpg';
import threeSlider from '../images/explorePage/3_slider.png';

class Explore extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: 0,
      showModal: false,
      sticky: false,
    };

    this.sliderContent = [
      {
        img: oneSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Browse the world.',
        text: 'Explore, search and discover satellite, aerial, and drone imagery, as well as data sets from archives around the world for a scientific window into an improved understanding global activity better.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
      {
        img: twoSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Upload Drone Imagery',
        text: 'Create secured single sign-on profile on Radiant.Earth´s cloud infrastructure, and upload, store and share drone imagery on demand for easy processing, analysis and visualization.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
      {
        img: threeSlider,
        subTitle: 'RADIANT.EARTH DATA EXPLORER',
        title: 'Integrate with external platforms',
        text: 'Streamline workflow by importing your existing databases directly into Radiant.Earth, and run algorithms modeling and reports for cross-domain analysis and decision-making.',
        buttonText: 'REQUEST ACCESS',
        buttonUrl: '#',
      },
    ];
  }

  changeSlider(slider) {
    if (slider >= 0 && slider < this.sliderContent.length) {
      this.setState({
        slider,
      });
    }
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

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const { slider, showModal, sticky } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        <Helmet>
          <script id="typef_orm_share" src="https://embed.typeform.com/embed.js">{}</script>
          <title>Radiant.Earth | Explore</title>
        </Helmet>
        <Header currentPath={pathname} />
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <div className={`l-explore ${sticky ? '-sticky' : ''}`}>
          <Swipeable
            onSwipeLeft={() => this.changeSlider(slider + 1)}
            onSwipeRight={() => this.changeSlider(slider - 1)}
          >
            <div className="l-explore__slider-content">
              <div className="row align-middle">
                <div className="l-explore__image columns large-6 medium-12 small-12">
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
                <div className="l-explore__content columns large-6 medium-12 small-12">
                  {this.sliderContent.map((item, i) =>
                    (<div key={i.toString()} className={`box-container ${i === slider ? '-show' : '-hidden'}`}>
                      <BoxTitleContent
                        subTitle={item.subTitle}
                        title={item.title}
                        text={item.text}
                      />
                      {i === 0 && <div className="container-buttons">
                        <a
                          target="_black"
                          data-mode="popup"
                          href="https://radiantearth.typeform.com/to/MLG7bC"
                          className="c-button -flex -back-white text -ff2-xs -uppercase typeform-share link"
                        >REQUEST ACCESS</a>
                        <div className="c-button -back-orange">
                          <a className="text -ff2-xs -color-2 -uppercase -white" href="https://app.radiant.earth/login" target="_blank" rel="noopener noreferrer">login</a>
                        </div>
                      </div>}
                    </div>)
                  )}
                </div>
                <ul className={`l-explore__circle-container columns large-12 medium-12 small-12 ${sticky ? '-sticky' : ''}`}>
                  {this.sliderContent.map((item, i) =>
                    (<button key={i.toString()} onClick={() => this.changeSlider(i)}>
                      <li className={`circle ${i === slider ? '-active' : ''}`}>{}</li>
                    </button>)
                  )}
                </ul>
              </div>
            </div>
          </Swipeable>
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
          <BoxModal openModal={this.showModal.bind(this)} show={showModal} />
        </div>
        <Footer />
      </div>
    );
  }
}

Explore.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Explore;
