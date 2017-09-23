import React, { Component } from 'react';
import Slider from 'react-slick';
import { Swipeable } from 'react-touch';
import ReactResizeDetector from 'react-resize-detector';
import ScrollEvent from 'react-onscroll';
import BoxModal from '../components/BoxModal';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import MotionCircle from '../components/MotionCircle';
import { API_BASE_URL, API_ROOT } from '../global';

import slider1 from '../images/home/cover/slider/1.jpg';
import slider2 from '../images/home/cover/slider/2.jpg';
import slider3 from '../images/home/cover/slider/3.jpg';
import slider4 from '../images/home/cover/slider/4.jpg';
import sub1 from '../images/home/cover/1-sub.jpg';
import sub2 from '../images/home/cover/2-sub.jpg';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slider: null,
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
      widthCircle: 510,
      testimonials: [],
      caseStudies: [],
      loaderTestimonials: false,
      loaderCase: false,
    };

    this.sliderHomePage = [
      {
        multiple: true,
        title1: 'Open Data.',
        title2: 'Neutral Environment.',
        title3: 'Transformative Impact.',
        image: slider1,
      },
      {
        multiple: false,
        title: 'Supporting the Global Development Community',
        text: 'Improved discovery of data and geospatial capacity to drive open remote sensing science to support global development objectives. ',
        image: slider2,
      },
      {
        multiple: false,
        title: 'Scaling Data',
        text: 'A convenient vehicle allowing for uploading, storing and sharing of drone, manned-aerial and satellite imagery from local files, Amazon S3, Dropbox or Google Drive.',
        image: slider3,
      },
      {
        multiple: false,
        title: 'Analytical and Visualization Tools',
        text: 'Extract features and calculate indices, or customize data visualization in a cross-domain multidisciplinary ecosystem.',
        image: slider4,
      }
    ];

    this.getTestimonials = this.getTestimonials.bind(this);
    this.getCaseStudies = this.getCaseStudies.bind(this);
  }

  componentDidMount() {
    this.getTestimonials();
    this.getCaseStudies();
    this.slideTestimonial('start');
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

  getTestimonials() {
    const self = this;
    fetch(`${API_BASE_URL}/use_cases?category=Testimonial`)
      .then(r => r.json())
      .then(data => self.setState({
        testimonials: data,
        loaderTestimonials: data.length !== 0
      }));
  }

  getCaseStudies() {
    const self = this;
    fetch(`${API_BASE_URL}/use_cases?category=Case study`)
      .then(r => r.json())
      .then(data => self.setState({
        caseStudies: data,
        loaderCase: data.length !== 0
      }));
  }

  slideTestimonial(d) {
    if (d !== 'null') {
      let minNumber = 2;
      const windowWidth = window.innerWidth;
      const vwSlidePx = 30 / (windowWidth * 0.01);
      let currentSlider;
      let transition = '100vw / 2.7';
      if (windowWidth > 1711) { transition = '610px'; }
      if (windowWidth < 1024) { transition = '100vw - 55px'; minNumber = 1; }
      currentSlider = d === 'next' ? currentSlider = this.state.slideTestimonialNumber + 1 : currentSlider = this.state.slideTestimonialNumber - 1;
      if (d !== 'start') {
        this.setState({
          slideTestimonialNumber: currentSlider,
          slideTestimonialBack: currentSlider > 1,
          slideTestimonialNext: currentSlider <= (this.state.testimonials.length - minNumber),
          positionSlideTestimonial: `translate3d(calc((((${transition}) * ${currentSlider - 1}) * (-1)) - ((${vwSlidePx}vw) * ${currentSlider - 1})), 0px, 0px)`,
        });
      } else {
        this.setState({
          slideTestimonialBack: currentSlider > 1,
          slideTestimonialNext: this.state.testimonials.length > 2,
        });
      }
    }
  }

  slideStudies(d) {
    if (d !== 'null') {
      let minNumber = 3;
      const windowWidth = window.innerWidth;
      const vwSlidePx = 30 / (windowWidth * 0.01);
      let currentSlider;
      let transition = '100vw / 4';
      if (windowWidth > 1625) { transition = '360px'; }
      if (windowWidth < 1025) { transition = '100vw / 2.7'; minNumber = 2; }
      if (windowWidth < 769) { transition = '100vw - 55px'; minNumber = 1; }
      currentSlider = d === 'next' ? currentSlider = this.state.slideStudiesNumber + 1 : currentSlider = this.state.slideStudiesNumber - 1;
      this.setState({
        slideStudiesNumber: currentSlider,
        slideStudiesBack: currentSlider > 1,
        slideStudiesNext: currentSlider <= (this.state.caseStudies.length - minNumber),
        positionSlideStudies: `translate3d(calc((((${transition}) * ${currentSlider - 1}) * (-1)) - ((${vwSlidePx}vw) * ${currentSlider - 1})), 0px, 0px)`,
      });
    }
  }

  showModal() {
    this.setState({
      showModal: !this.state.showModal
    });
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

  render() {
    const { testimonials, caseStudies, loaderTestimonials, loaderCase, sticky } = this.state;

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
        <ScrollEvent handleScrollCallback={() => this.handleScrollCallback()} />
        <Header color="white" />
        <div className={`l-home ${sticky ? '-sticky' : ''}`}>
          <Slider {...settingsCover}>
            {this.sliderHomePage.map((item, i) =>
              (
                <div key={i.toString()} className="l-home__cover-title" style={{ backgroundImage: `url(${item.image})` }}>
                  {item.multiple === false && <h1 className="text -ff2-xl -white -center">{item.title}</h1>}
                  {item.multiple === true && <h1 className="text -ff2-xl -white -center">{item.title1}<br />{item.title2}<br />{item.title3}</h1>}
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
                  text="Accessible to anyone, anywhere and anytime, Radiant.Earth’s platform exposes imagery across the globe, time and spectrum, helping people discover the vast resources of Earth imagery, and tools for new solutions, discoveries and innovations."
                  buttonText="explore page"
                  buttonUrl="/explore"
                />
              </div>
            </div>
          </div>
          <div className="l-home__intro-secondary">
            <div className="row">
              <div className="l-home__intro-text columns large-6 medium-6 small-12">
                <BoxTitleContent
                  subTitle=""
                  title="Create powerful insights and evidence-based support for change"
                  text="Radiant.Earth guides people in the use of Earth imagery, geospatial data sets and tools through capacity building programs, market analysis, use cases and best practices, all creating a market place for the global development community"
                  buttonText="community page"
                  buttonUrl="/"
                />
              </div>
              <div className="l-home__intro-image columns large-6 medium-6 small-12">
                <MotionCircle
                  move={false}
                  width={this.state.widthCircle.toString()}
                  backgroundImage={sub2}
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
                  {loaderTestimonials === false && <div className="c-box-loader -primary">
                    <div className="timeline-item">
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background -s">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -footer">{}</div>
                    </div>
                  </div>}
                  {loaderTestimonials === false && <div className="c-box-loader -primary">
                    <div className="timeline-item">
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -s">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background -footer">{}</div>
                    </div>
                  </div>}
                  {loaderTestimonials && <div className="l-home__testimonial-slider large-12 medium-12 small-12">
                    {testimonials.map((item, i) =>
                      (<div key={i.toString()} className={`l-home__testimonial-item ${(i + 1) > (this.state.slideTestimonialNumber + 1) ? '' : '-show'} ${(i + 1) < this.state.slideTestimonialNumber ? '-not-back' : ''}`}>
                        <div>
                          <p className="text -ff2-m">
                            <span className="quotes">“</span>
                            {item.quote}
                            <span className="quotes">”</span>
                          </p>
                        </div>
                        <div className="author-contain">
                          <span className="name text -color-1">- {item.author}</span>
                          <div style={{ backgroundImage: `url(${API_ROOT}${item.image})` }} className="img">{}</div>
                        </div>
                      </div>)
                    )}
                  </div>}
                </div>
              </div>
            </div>
          </Swipeable>
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

                  {loaderCase === false && <div className="c-box-loader -secondary">
                    <div className="timeline-item">
                      <div className="animated-background -image">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background -s">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                    </div>
                  </div>}
                  {loaderCase === false && <div className="c-box-loader -secondary">
                    <div className="timeline-item">
                      <div className="animated-background -image">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background -s">{}</div>
                    </div>
                  </div>}
                  {loaderCase === false && <div className="c-box-loader -secondary">
                    <div className="timeline-item">
                      <div className="animated-background -image">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -s">{}</div>
                      <div className="animated-background -m">{}</div>
                    </div>
                  </div>}
                  {loaderCase === false && <div className="c-box-loader -secondary">
                    <div className="timeline-item">
                      <div className="animated-background -image">{}</div>
                      <div className="animated-background -m">{}</div>
                      <div className="animated-background">{}</div>
                      <div className="animated-background -s">{}</div>
                      <div className="animated-background -m">{}</div>
                    </div>
                  </div>}
                  {loaderCase && <div className="l-home__studies-slider large-12 medium-12 small-12">
                    {caseStudies.map((item, i) =>
                      (<div key={i.toString()} className={`l-home__studies-item ${(i) > (this.state.slideStudiesNumber + 1) ? '' : '-show'} ${(i + 1) < (this.state.slideStudiesNumber) ? '-not-back' : ''}`}>
                        <div className="img" style={{ backgroundImage: `url(${API_ROOT}${item.image})` }}>{}</div>
                        <div>
                          <BoxTitleContent
                            title={item.quote}
                            text={item.description}
                          />
                        </div>
                      </div>)
                    )}
                  </div>}
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
