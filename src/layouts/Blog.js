import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Siema from 'siema';
import Masonry from 'react-masonry-component';

class Blog extends Component {

  constructor () {
    super();

    this.blogContent = [
      {
        tag: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        description:'On minimizing the latency of serving painted raster tiles.'
      },
      {
        tag: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        description:'Reflections on a SatSummit panel focused on how to expand access and distribution to earth imagery.'
      },
      {
        tag: 'TUTORIALS',
        title: 'Atomate analyses when updated imagery is available',
        description:'Develop custom algorithms to extract information from your imagery and define automated pipelines to analyze your data.'
      },
      {
        tag: 'TUTORIALS',
        title: 'How to integrate the Radiant Earth API with your application',
        description:'Learn how to create powerful insights and evidence-based support for change'
      },
      {
        tag: 'NEW FEATURES',
        title: 'Ingest your own data',
        description:'Bring your own drone, manned-aerial, and satellite imagery into the Data Explorer with a few clicks.'
      },
      {
        tag: 'NEWS',
        title: 'Hello World',
        description:'Today, I am really excited to introduce and announce Raster Foundry.'
      }
    ];

    this.sliderContent = [
      {
        tag: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar'
      },
      {
        tag: 'NEWS',
        title: 'Expanding Access to Earth Observation Data'
      },
      {
        tag: 'TUTORIALS',
        title: 'Atomate analyses when updated imagery is available'
      },
      {
        tag: 'TUTORIALS',
        title: 'How to integrate the Radiant Earth API with your application'
      },
      {
        tag: 'NEW FEATURES',
        title: 'Ingest your own data'
      }
    ];
  }

  componentDidMount() {
    this.showSlider();
  }

  showSlider() {
    const mySlider = new Siema({
      selector: this.slider,
      duration: 500,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: true,
      threshold: 20,
      loop: false,
      onInit: () => {},
      onChange: () => {},
    });

    const btnSlider = document.querySelectorAll('.c-slider__btn-slider');
    btnSlider[0].classList.add('selected');

    for (var i = 0; i < btnSlider.length; i++) {
      btnSlider[i].addEventListener('click', function(event) {
        for (var j = 0; j < btnSlider.length; j++) {
          if (btnSlider[j].classList.contains('selected')) {
            btnSlider[j].classList.remove('selected');
          }
        }
        mySlider.goTo(parseInt(event.target.innerHTML));
        this.classList.add('selected');
      });
    }
  }

  render() {
    return (
      <div>
        <Header />
          <div className="l-blog">
            <div className="row">
              <div className="small-12 medium-9 large-7 small-offset-0 medium-offset-2 large-offset-5 columns l-blog__header c-slider" >
                <div className="c-slider__container-btn columns" ref={(c) => { this.containerBtn = c; }}>
                  {this.sliderContent.map((item, i) =>
                    <button className="c-slider__btn-slider" key={i}>{i}</button>
                  )}
                </div>
                <div ref={(c) => { this.slider = c; }}>
                  {this.sliderContent.map((item, i) =>
                    <div key={i} className="small-12 columns l-blog__gallery-item">
                      <div className="c-slider__item_blog">
                        <span className="text -ff1-m -color-2 -uppercase">{item.tag}</span>
                        <h1 className="text -ff2-xl -white -underline">{item.title}</h1>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns l-blog__gallery">
                <Masonry className="l-blog__gallery-masonry">
                  {this.blogContent.map((item, i) =>
                    <div key={i} className="l-blog__gallery-item">
                      <a href="#">
                        <div className="l-blog__gallery-item-picture">
                          <svg className="icon icon-logo l-blog__gallery-item-logo"><use xlinkHref="#icon-medium"></use></svg>
                        </div>
                        <span className="text -ff2-xs -color-2 -uppercase">{item.tag}</span>
                        <h2 className="l-blog__gallery-item-title text -ff2-l -white">{item.title}</h2>
                        <p className="l-blog__gallery-item-summary text -ff1-m -white">{item.description}</p>
                      </a>
                    </div>
                  )}
                </Masonry>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  };
}

export default Blog;
