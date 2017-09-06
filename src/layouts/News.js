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
    };
  }

  render() {
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

    return (
      <div>
        <Header />
        <div className="l-news">
          <div className="l-news__cover">
            <div className="row">
              <div className="columns large-6 medium-6 small-12 circle-image" style={{ backgroundImage: `url(${image4})` }}>{}</div>
              <div className="columns large-6 medium-6 small-12 text-cover">
                <BoxTitleContent
                  subTitle="Use cases"
                  title="How an Amazonas Moisture Index helped the Yanomami tribe"
                />
              </div>
              <ul className="dots-cover">
                <li className="-selected">{}</li>
                <li>{}</li>
                <li>{}</li>
                <li>{}</li>
              </ul>
            </div>
          </div>
          <div className="l-news__gallery">
            <div className="row">
              {gridNewsContent.map((item, i) =>
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
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default News;
