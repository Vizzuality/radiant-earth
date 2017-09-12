import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import BoxCard from '../components/BoxCard';

import image1 from '../images/home/cover/1.jpg';
import image2 from '../images/home/cover/2.jpg';
import image3 from '../images/home/cover/3.jpg';
import image4 from '../images/home/cover/4.jpg';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      limitGrid: 3
    };
  }

  changeSlider(slider) {
    this.setState({
      slider,
    });
  }

  updateLimitGrid() {
    this.setState({
      limitGrid: this.state.limitGrid + 3
    });
  }

  render() {
    const sliderContent = [
      {
        img: image1,
        subTitle: '1Use cases',
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe'
      },
      {
        img: image2,
        subTitle: '2Use cases',
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe'
      },
      {
        img: image3,
        subTitle: '3Use cases',
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe'
      },
      {
        img: image4,
        subTitle: '4Use cases',
        title: 'How an Amazonas Moisture Index helped the Yanomami tribe'
      },
    ];

    const gridNewsContent = [
      {
        img: image1,
        subTitle: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        text: 'On minimizing the latency of serving painted raster tiles.',
      },
      {
        img: image2,
        video: 'Jf3CPnDMVz0',
        channel: 'youtube',
        subTitle: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        text: 'Reflections on a SatSummit panel focused on how to expand access and distribution to earth imagery.',
      },
      {
        img: image3,
        subTitle: 'TUTORIALS',
        title: 'Atomate analyses when updated imagery is available',
        text: 'Develop custom algorithms to extract information from your imagery and define automated pipelines to analyze your data.',
      },
      {
        img: image3,
        subTitle: 'TUTORIALS',
        title: 'Atomate analyses when updated imagery is available',
        text: 'Develop custom algorithms to extract information from your imagery and define automated pipelines to analyze your data.',
      },
      {
        img: image1,
        video: '113009024',
        channel: 'vimeo',
        subTitle: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        text: 'On minimizing the latency of serving painted raster tiles.',
      },
      {
        img: image2,
        subTitle: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        text: 'Reflections on a SatSummit panel focused on how to expand access and distribution to earth imagery.',
      },
      {
        img: image1,
        video: '82557065',
        channel: 'vimeo',
        subTitle: 'NEW FEATURES',
        title: 'Laying Tiles Without Grout and Mortar',
        text: 'On minimizing the latency of serving painted raster tiles.',
      },
      {
        img: image2,
        subTitle: 'NEWS',
        title: 'Expanding Access to Earth Observation Data',
        text: 'Reflections on a SatSummit panel focused on how to expand access and distribution to earth imagery.',
      },
    ];

    const { slider, limitGrid } = this.state;

    return (
      <div>
        <Header />
        <div className="l-news">
          <div className="l-news__cover">
            <div className="row">
              <div className="columns large-6 medium-6 small-12 l-news__image">
                {sliderContent.map((item, i) =>
                  <div key={i.toString()} className={`circle-image ${i === slider ? '-show' : '-hidden'}`} style={{ backgroundImage: `url(${item.img})` }}>{}</div>
                )}
              </div>
              <div className="columns large-6 medium-6 small-12 l-news__text-cover">
                {sliderContent.map((item, i) =>
                  (<div key={i.toString()} className={`text-cover-contain ${i === slider ? '-show' : '-hidden'}`}>
                    <BoxTitleContent
                      subTitle={item.subTitle}
                      title={item.title}
                    />
                  </div>)
                )}
              </div>
              <ul className="dots-cover">
                {sliderContent.map((item, i) =>
                  (<button
                    onClick={() => this.changeSlider(i)}
                    key={i.toString()}
                  >
                    <li
                      className={`${i === slider ? '-selected' : ''}`}
                    >{}</li>
                  </button>)
                )}
              </ul>
            </div>
          </div>
          <div className="l-news__gallery">
            <div className="row">
              {gridNewsContent.slice(0, limitGrid).map((item, i) =>
                (<BoxCard
                  key={i.toString()}
                  img={item.img}
                  subTitle={item.subTitle}
                  title={item.title}
                  text={item.text}
                  video={item.video}
                  channel={item.channel}
                />
                )
              )}
              <div className="contain-button large-12 medium-12 small-12">
                <button
                  className="c-button -back-gray text -uppercase -ff2-m"
                  onClick={() => this.updateLimitGrid()}
                >load more</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
