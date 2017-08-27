import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import image1 from '../images/home/cover/1.jpg';
import image2 from '../images/home/cover/2.jpg';
import image3 from '../images/home/cover/3.jpg';
import image4 from '../images/home/cover/4.jpg';
import image5 from '../images/home/cover/5.jpg';

class Home extends Component {

  constructor(props) {
    super(props);

    const positionCircle =  Math.floor((Math.random() * 2) + 0);
    const classCircles = ['-one-position', '-two-position'];
    const classCircle = classCircles[positionCircle];

    this.state = {
      slider: null,
      classCircleSelect: classCircle,
      slideTestimonialNumber: 1,
      slideTestimonialNext: true,
      slideTestimonialBack: false,
    };
  }

  slideTestimonial(d) {
    const e = this.sliderTestimonial;
    const windowWidth = window.innerWidth;
    const vwSlidePx = 30 / (windowWidth * 0.01);
    let currentSlider;
    currentSlider = d === 'next' ? currentSlider = this.state.slideTestimonialNumber + 1 : currentSlider = this.state.slideTestimonialNumber - 1;
    e.style.transform = `translate3d(calc((((100vw / 2.7) * ${currentSlider - 1}) * (-1)) - ((${vwSlidePx}vw) * ${currentSlider - 1})), 0px, 0px)`;
    this.setState({
      slideTestimonialNumber: currentSlider,
      slideTestimonialBack: currentSlider > 1,
      slideTestimonialNext: currentSlider !== (document.getElementsByClassName('l-home__testimonial-item').length - 1),
    });
  }

  slideCaseStudies() {

  }

  render() {
    return (
      <div>
        <Header />
        <div className="l-home">
          <div className="l-home__cover">
            <div className="l-home__cover-title">
              <h1 className="text -ff2-xl -color-1 -center">Open. Neutral. Transformative.</h1>
              <p className="text -ff1-m -center">Radiant Earth provides a geospatial and imagery technology platform that supports knowledge transfer to positively impact the developing world’s greatest social, economic and environmental challenges.</p>
            </div>
            <span className="c-button-circle">
              <svg className="icon icon-arrow-down"><use xlinkHref="#icon-arrow-down"></use></svg>
            </span>

            <div className={`l-home__circle-image -image-1 ${this.state.classCircleSelect}`} style={{backgroundImage: 'url(' + image1 + ')'}}></div>
            <div className={`l-home__circle-image -image-2 ${this.state.classCircleSelect}`} style={{backgroundImage: 'url(' + image2 + ')'}}></div>
            <div className={`l-home__circle-image -image-3 ${this.state.classCircleSelect}`} style={{backgroundImage: 'url(' + image3 + ')'}}></div>
            <div className={`l-home__circle-image -image-4 ${this.state.classCircleSelect}`} style={{backgroundImage: 'url(' + image4 + ')'}}></div>
            <div className={`l-home__circle-image -image-5 ${this.state.classCircleSelect}`} style={{backgroundImage: 'url(' + image5 + ')'}}></div>

          </div>

          <div className="l-home__intro">
            <div className="row">
              <div className="l-home__intro-image columns large-6 medium-6 small-6"></div>
              <div className="l-home__intro-text columns large-6 medium-6 small-6">
                <BoxTitleContent
                  subTitle=""
                  title="Open geospatial data for positive global impact, and improved decision-making"
                  text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                  buttonText="find out more"
                  buttonUrl="#"
                />
              </div>
            </div>
          </div>

          <div className="l-home__testimonial">
            <div className="row">
              <span className={`c-button-circle -next -right ${this.state.slideTestimonialNext ? '-show' : ''}`} onClick={()=>this.slideTestimonial('next')}>
                <svg className="icon icon-arrow-down"><use xlinkHref="#icon-arrow-down"></use></svg>
              </span>

              <span className={`c-button-circle -back -left ${this.state.slideTestimonialBack ? '-show' : ''}`} onClick={()=>this.slideTestimonial('back')}>
                <svg className="icon icon-arrow-down"><use xlinkHref="#icon-arrow-down"></use></svg>
              </span>
              <h2 className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12">TESTIMONIAL</h2>
              <div className="l-home__testimonial-slider columns large-12 medium-12 small-12" ref={(sliderTestimonial) => { this.sliderTestimonial = sliderTestimonial; }}>

                <div className="l-home__testimonial-item">
                  <div>
                    <p className="text -ff2-m">
                      <span className="quotes">“</span>
                        This partnership fits us perfectly, as we can combine the operational nature of UNOSAT with the outreach and long-term impact Radiant.Earth is also looking for. Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.
                      <span className="quotes">”</span>
                    </p>
                  </div>
                  <div className="author-contain">
                    <span className="name text -color-1">- Einar Bjorgo, UNOSAT´s Manager</span>
                    <div className="img"></div>
                  </div>
                </div>

                <div className="l-home__testimonial-item">
                  <div>
                    <p className="text -ff2-m">
                      <span className="quotes">“</span>
                        This partnership fits us perfectly, as we can combine the operational nature of UNOSAT with the outreach and long-term impact Radiant.Earth is also looking for. Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.
                      <span className="quotes">”</span>
                    </p>
                  </div>
                  <div className="author-contain">
                    <span className="name text -color-1">- Einar Bjorgo, UNOSAT´s Manager</span>
                    <div className="img"></div>
                  </div>
                </div>

                <div className="l-home__testimonial-item">
                  <div>
                    <p className="text -ff2-m">
                      <span className="quotes">“</span>
                        This partnership fits us perfectly, as we can combine the operational nature of UNOSAT with the outreach and long-term impact Radiant.Earth is also looking for. Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.
                      <span className="quotes">”</span>
                    </p>
                  </div>
                  <div className="author-contain">
                    <span className="name text -color-1">- Einar Bjorgo, UNOSAT´s Manager</span>
                    <div className="img"></div>
                  </div>
                </div>

                <div className="l-home__testimonial-item">
                  <div>
                    <p className="text -ff2-m">
                      <span className="quotes">“</span>
                        This partnership fits us perfectly, as we can combine the operational nature of UNOSAT with the outreach and long-term impact Radiant.Earth is also looking for. Finally, we will have a platform and solutions in place for accessing the wealth of Earth observation data out there, and the ready-to-use products that will go along with them.
                      <span className="quotes">”</span>
                    </p>
                  </div>
                  <div className="author-contain">
                    <span className="name text -color-1">- Einar Bjorgo, UNOSAT´s Manager</span>
                    <div className="img"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="l-home__intro-secondary">
            <div className="row">
              <div className="l-home__intro-text columns large-6 medium-6 small-6">
                <BoxTitleContent
                  subTitle=""
                  title="Open geospatial data for positive global impact, and improved decision-making"
                  text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                  buttonText="find out more"
                  buttonUrl="#"
                />
              </div>
              <div className="l-home__intro-image columns large-6 medium-6 small-6"></div>
            </div>
          </div>

          <div className="l-home__studies">
            <div className="row">
              <span className="c-button-circle -right">
                <svg className="icon icon-arrow-down"><use xlinkHref="#icon-arrow-down"></use></svg>
              </span>
              <h2 className="text -ff2-xs -color-2 columns -uppercase large-12 medium-12 small-12">LATEST CASE STUDIES</h2>
              <div className="l-home__studies-slider columns large-12 medium-12 small-12">
                <div className="l-home__studies-item">
                  <div className="img"></div>
                  <div>
                    <BoxTitleContent
                      title="Open geospatial data for positive global impact, and improved decision-making"
                      text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                    />
                  </div>
                </div>

                <div className="l-home__studies-item">
                  <div className="img"></div>
                  <div>
                    <BoxTitleContent
                      title="Open geospatial data for positive global impact, and improved decision-making"
                      text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                    />
                  </div>
                </div>

                <div className="l-home__studies-item">
                  <div className="img"></div>
                  <div>
                    <BoxTitleContent
                      title="Open geospatial data for positive global impact, and improved decision-making"
                      text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                    />
                  </div>
                </div>

                <div className="l-home__studies-item">
                  <div className="img"></div>
                  <div>
                    <BoxTitleContent
                      title="Open geospatial data for positive global impact, and improved decision-making"
                      text="Radiant offers solutions to fully realizing the potential of earth observation for positive, even life-changing global impact: It simplifies the overall process across the value chain of using geospatial data."
                    />
                  </div>
                </div>
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
