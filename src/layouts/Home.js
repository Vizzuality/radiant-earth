import React, { Component } from 'react';
import Slider from 'react-slick';
import { Swipeable } from 'react-touch';
import ReactResizeDetector from 'react-resize-detector';
import BoxModal from '../components/BoxModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import MotionCircle from '../components/MotionCircle';

import slider1 from '../images/home/cover/slider/1.jpg';
import slider2 from '../images/home/cover/slider/2.jpg';
import slider3 from '../images/home/cover/slider/3.jpg';
import slider4 from '../images/home/cover/slider/4.jpg';

import sub1 from '../images/home/cover/1-sub.jpg';
import sub2 from '../images/home/cover/2-sub.jpg';

import einar from '../images/home/testimonials/einar.jpg';
import jed from '../images/home/testimonials/jed.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    const positionCircle = Math.floor((Math.random() * 2) + 0);
    const classCircles = ['-one-position', '-two-position'];
    const classCircle = classCircles[positionCircle];

    this.state = {
      slider: null,
      classCircleSelect: classCircle,
      slideTestimonialNumber: 1,
      slideTestimonialNext: true,
      slideTestimonialBack: false,
      positionSlideTestimonial: '',
      slideStudiesNumber: 1,
      slideStudiesNext: true,
      slideStudiesBack: false,
      positionSlideStudies: '',
      sliderHomePage: 0,
      showModal: false,
      widthCircle: 510
    };

    this.sliderTestimonial = [
      {
        text: 'Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.',
        name: 'Einar Bjorgo, UNOSAT´s Manager',
        image: einar,
      },
      {
        text: 'We regularly hear from researchers who are held back by the time and expense required to acquire copies of data. Radiant.Earth is set to do something remarkable by making large amounts of Earth observation data available on the cloud where anyone can analyze it at any scale without needing to copy it, using whatever tools they want, and even creating new tools of their own.',
        name: 'Einar Bjorgo, UNOSAT´s Manager',
        image: jed,
      },
      {
        text: 'This partnership fits us perfectly, as we can combine the operational nature of UNOSAT with the outreach and long-term impact Radiant.Earth is also looking for. Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.',
        name: 'People',
      }
    ];

    this.sliderHomePage = [
      {
        title: 'Open Data. Neutral Environment. Transformative Impact.',
        text: 'Explore, search and discover satellite, aerial and drone imagery, as well as complimentary non-raster geospatial data sets from archives around the world for a scientific window into understanding global activity better.',
        image: slider1,
      },
      {
        title: 'Supporting the Global Development Community',
        text: 'Improved discovery of data and geospatial capacity to drive open remote sensing science to support global development objectives. ',
        image: slider2,
      },
      {
        title: 'Scaling Data',
        text: 'A convenient vehicle allowing for uploading, storing and sharing of drone, manned-aerial and satellite imagery from local files, Amazon S3, Dropbox or Google Drive.',
        image: slider3,
      },
      {
        title: 'Analytical and Visualization Tools',
        text: 'Extract features and calculate indices, or customize data visualization in a cross-domain multidisciplinary ecosystem.',
        image: slider4,
      }
    ];

    this.sliderStudies = [
      {
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe',
        text: 'On minimizing the latency of serving painted raster tiles.',
        img: ''
      },
      {
        title: 'Expanding Access to Earth Observation Data',
        text: 'Reflections on a SatSummit panel focused on how to expand access and distribution to earth imagery.',
        img: ''
      },
      {
        title: 'Atomate analyses when updated imagery is available',
        text: 'Develop custom algorithms to extract information from your imagery and define automated pipelines to analyze your data.',
        img: ''
      },
      {
        title: 'Ingest your own data',
        text: 'Bring your own drone, manned-aerial, and satellite imagery into the Data Explorer with a few clicks.',
        img: ''
      },
      {
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe',
        text: 'On minimizing the latency of serving painted raster tiles.',
        img: ''
      },
    ];
  }

  onResize() {
    if (window.innerWidth < 1050) {
      this.setState({
        widthCircle: 310
      });
    } else {
      this.setState({
        widthCircle: 510
      });
    }
  }

  slideTestimonial(d) {
    if (d !== 'null') {
      const windowWidth = window.innerWidth;
      const vwSlidePx = 30 / (windowWidth * 0.01);
      let currentSlider;
      let transition = '100vw / 2.7';
      if (windowWidth > 1711) { transition = '610px'; }
      if (windowWidth < 1024) { transition = '100vw - 55px'; }
      currentSlider = d === 'next' ? currentSlider = this.state.slideTestimonialNumber + 1 : currentSlider = this.state.slideTestimonialNumber - 1;
      this.setState({
        slideTestimonialNumber: currentSlider,
        slideTestimonialBack: currentSlider > 1,
        slideTestimonialNext: currentSlider <= (document.getElementsByClassName('l-home__testimonial-item').length / 2),
        positionSlideTestimonial: `translate3d(calc((((${transition}) * ${currentSlider - 1}) * (-1)) - ((${vwSlidePx}vw) * ${currentSlider - 1})), 0px, 0px)`,
      });
    }
  }

  slideStudies(d) {
    if (d !== 'null') {
      const windowWidth = window.innerWidth;
      const vwSlidePx = 30 / (windowWidth * 0.01);
      let currentSlider;
      let transition = '100vw / 4';
      if (windowWidth > 1625) { transition = '360px'; }
      if (windowWidth < 1024) { transition = '100vw - 55px'; }
      currentSlider = d === 'next' ? currentSlider = this.state.slideStudiesNumber + 1 : currentSlider = this.state.slideStudiesNumber - 1;
      this.setState({
        slideStudiesNumber: currentSlider,
        slideStudiesBack: currentSlider > 1,
        slideStudiesNext: currentSlider !== (document.getElementsByClassName('l-home__studies-item').length - 2),
        positionSlideStudies: `translate3d(calc((((${transition}) * ${currentSlider - 1}) * (-1)) - ((${vwSlidePx}vw) * ${currentSlider - 1})), 0px, 0px)`,
      });
    }
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }

  render() {
    const settingsCover = {
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      className: 'l-home__cover',
      swipeToSlide: false,
      dotsClass: 'contain-buttons'
    };

    return (
      <div>
        <Header color="white" />
        <div className="l-home">
          <Slider {...settingsCover}>
            {this.sliderHomePage.map((item, i) =>
              (
                <div key={i.toString()} className="l-home__cover-title" style={{ backgroundImage: `url(${item.image})` }}>
                  <h1 className="text -ff2-xl -white -center">{item.title}</h1>
                  <p className="text -ff1-xm -white -center -shadow">{item.text}</p>
                  {i === 0 && <div className="container-buttons">
                    <div className="c-button -back-orange">
                      <a className="text -ff2-xs -color-2 -uppercase -white" href={'/#'} rel="noopener noreferrer">explore data</a>
                    </div>
                    <button
                      onClick={this.showModal.bind(this)}
                      className="c-button -back-white text -ff2-xs -uppercase"
                    >REQUEST ACCESS</button>
                  </div>}
                </div>
              )
            )}
          </Slider>
          <div className="l-home__intro">
            <div className="row">
              <div className="l-home__intro-image columns large-6 medium-6 small-12">
                <MotionCircle width={this.state.widthCircle.toString()} backgroundImage={sub1} />
              </div>
              <div className="l-home__intro-text columns large-6 medium-6 small-12">
                <BoxTitleContent
                  subTitle=""
                  title="Accelerate improved decision-making"
                  text="Accessible to anyone anywhere and anytime, Radiant.Earth’s platform expose imagery across the globe, date and spectrum, helping people discover the vast resources of Earth imagery, data sets and tools for new solutions, discoveries and innovations."
                />
              </div>
            </div>
          </div>
          <Swipeable onSwipeLeft={() => this.slideTestimonial(`${this.state.slideTestimonialNext ? 'next' : 'null'}`)} onSwipeRight={() => this.slideTestimonial(`${this.state.slideTestimonialBack ? 'back' : 'null'}`)}>
            <div className="l-home__testimonial">
              <div className="row">
                <button className={`c-button-circle -next -right ${this.state.slideTestimonialNext ? '-show' : ''}`} onClick={() => this.slideTestimonial('next')}>
                  <svg className="icon icon-arrow-down">
                    <use xlinkHref="#icon-arrow-down">{}</use></svg>
                </button>
                <button className={`c-button-circle -back -left ${this.state.slideTestimonialBack ? '-show' : ''}`} onClick={() => this.slideTestimonial('back')}>
                  <svg className="icon icon-arrow-down">
                    <use xlinkHref="#icon-arrow-down">{}</use></svg>
                </button>
                <h2
                  className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
                >community</h2>
                <div
                  className="l-home__testimonial-slider columns large-12 medium-12 small-12"
                  style={{ transform: this.state.positionSlideTestimonial }}
                >
                  {this.sliderTestimonial.map((item, i) =>
                    (<div key={i.toString()} className={`l-home__testimonial-item ${(i + 1) > (this.state.slideTestimonialNumber + 1) ? '' : '-show'} ${(i + 1) < this.state.slideTestimonialNumber ? '-not-back' : ''}`}>
                      <div>
                        <p className="text -ff2-m">
                          <span className="quotes">“</span>
                          {item.text}
                          <span className="quotes">”</span>
                        </p>
                      </div>
                      <div className="author-contain">
                        <span className="name text -color-1">- {item.name}</span>
                        <div style={{ backgroundImage: `url(${item.image})` }} className="img">{}</div>
                      </div>
                    </div>)
                  )}
                </div>
              </div>
            </div>
          </Swipeable>
          <div className="l-home__intro-secondary">
            <div className="row">
              <div className="l-home__intro-text columns large-6 medium-6 small-12">
                <BoxTitleContent
                  subTitle=""
                  title="Create powerful insights and evidence-based support for change"
                  text="Radiant.Earth guide people in the use of Earth imagery, geospatial data sets and tools through capacity building programs, market information and analysis on remote sensing activity, highlighting use cases and best practices, and offering a market place for Earth imagery."
                  buttonUrl="#"
                />
              </div>
              <div className="l-home__intro-image columns large-6 medium-6 small-12">
                <MotionCircle width="510" backgroundImage={sub2} />
              </div>
            </div>
          </div>
          <Swipeable onSwipeLeft={() => this.slideStudies(`${this.state.slideStudiesNext ? 'next' : 'null'}`)} onSwipeRight={() => this.slideStudies(`${this.state.slideStudiesBack ? 'back' : 'null'}`)}>
            <div className="l-home__studies">
              <div className="row">
                <button className={`c-button-circle -next -right ${this.state.slideStudiesNext ? '-show' : ''}`} onClick={() => this.slideStudies('next')}>
                  <svg className="icon icon-arrow-down">
                    <use xlinkHref="#icon-arrow-down">{}</use></svg>
                </button>
                <button className={`c-button-circle -back -left ${this.state.slideStudiesBack ? '-show' : ''}`} onClick={() => this.slideStudies('back')}>
                  <svg className="icon icon-arrow-down">
                    <use xlinkHref="#icon-arrow-down">{}</use></svg>
                </button>
                <h2
                  className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12"
                >LATEST CASE STUDIES</h2>
                <div
                  className="l-home__studies-slider columns large-12 medium-12 small-12"
                  style={{ transform: this.state.positionSlideStudies }}
                >
                  {this.sliderStudies.map((item, i) =>
                    (<div key={i.toString()} className={`l-home__studies-item ${(i) > (this.state.slideStudiesNumber + 1) ? '' : '-show'} ${(i + 1) < (this.state.slideStudiesNumber) ? '-not-back' : ''}`}>
                      <div className="img">{}</div>
                      <div>
                        <BoxTitleContent
                          title={item.title}
                          text={item.text}
                        />
                      </div>
                    </div>)
                  )}
                </div>
              </div>
            </div>
          </Swipeable>
          <BoxModal openModal={this.showModal.bind(this)} show={this.state.showModal} />
        </div>
        <Footer />
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize.bind(this)} />
      </div>
    );
  }
}

export default Home;
