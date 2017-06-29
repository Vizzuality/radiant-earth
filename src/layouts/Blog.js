import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import Masonry from 'react-masonry-component';

class Blog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
    };

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
        title: 'Laying Tiles Without Grout and Mortar',
        image: 1
      },
      {
        tag: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        image: 2
      },
      {
        tag: 'TUTORIALS',
        title: 'Atomate analyses when updated imagery is available',
        image: 3
      },
      {
        tag: 'TUTORIALS',
        title: 'How to integrate the Radiant Earth API with your application',
        image: 4
      },
      {
        tag: 'NEW FEATURES',
        title: 'Ingest your own data',
        image: 5
      }
    ];
  }

  render() {

    const sliderOptions = {
      arrows: false,
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      draggable: false,
      dotsClass: 'c-slider__dots',
      afterChange: function(slider){
        this.setState({
          count: slider + 1
        });
      }.bind(this)
    };

    return (
      <div>
        <Header />
          <div className="l-blog">
            <div className="row">
              {this.sliderContent.map((item, i) =>
                <div className={`l-blog__circle-image -img-${item.image} ${this.state.count === item.image ? '-visible' : '-hidden' }`}></div>
              )}
              <div className="small-12 medium-9 large-7 small-offset-0 medium-offset-2 large-offset-5 columns l-blog__header c-slider">
                <Slider {...sliderOptions}>
                  {this.sliderContent.map((item, i) =>
                    <div key={i} className="small-12 columns l-blog__gallery-item">
                      <div className="c-slider__item_blog">
                        <span className="text -ff2-xs  -color-2 -uppercase c-slider__tag">{item.tag}</span>
                        <h1 className="text -ff2-xl -white">
                          <span className="-underline">{item.title}</span></h1>
                      </div>
                    </div>
                  )}
                </ Slider>
              </div>
            </div>
            <div className="row">
              <div className="small-12 columns l-blog__gallery">
                <Masonry className="l-blog__gallery-masonry">
                  {this.blogContent.map((item, i) =>
                    <div key={i} className="l-blog__gallery-item">
                      <a href={''}>
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
