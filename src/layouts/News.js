import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BoxTitleContent from '../components/BoxTitleContent';
import BoxCard from '../components/BoxCard';
import MotionCircle from '../components/MotionCircle';
import { API_BASE_URL, API_ROOT } from '../global';

class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slider: 0,
      sliderNews: [],
      gridNews: [],
      gridShowNumber: 3
    };

    this.getSliderNews = this.getSliderNews.bind(this);
    this.getGridNews = this.getGridNews.bind(this);
    this.updateLimitGrid = this.updateLimitGrid.bind(this);
  }

  componentDidMount() {
    this.getSliderNews();
    this.getGridNews();
  }

  getSliderNews() {
    const self = this;
    fetch(`${API_BASE_URL}/posts?per_page=3`)
      .then(r => r.json())
      .then(data => self.setState({ sliderNews: data }));
  }

  getGridNews() {
    const self = this;
    fetch(`${API_BASE_URL}/posts?per_page=${this.state.gridShowNumber}`)
      .then(r => r.json())
      .then(data => self.setState({ gridNews: data }));
  }

  changeSlider(slider) {
    this.setState({
      slider,
    });
  }

  updateLimitGrid() {
    const self = this;
    self.setState({
      gridShowNumber: this.state.gridShowNumber + 3
    });
  }

  render() {
    const { slider, sliderNews, gridNews } = this.state;

    return (
      <div>
        <Header />
        <div className="l-news">
          <div className="l-news__cover">
            <div className="row">
              <div className="columns large-6 medium-6 small-12 l-news__image">
                {sliderNews.map((item, i) =>
                  (<div key={i.toString()} className={`circle-image ${i === slider ? '-show' : '-hidden'}`}>
                    <MotionCircle width="510" backgroundImage={`${API_ROOT}${item.image}`} />
                  </div>)
                )}
              </div>
              <div className="columns large-6 medium-6 small-12 l-news__text-cover">
                {sliderNews.map((item, i) =>
                  (<div key={i.toString()} className={`text-cover-contain ${i === slider ? '-show' : '-hidden'}`}>
                    <BoxTitleContent
                      title={item.title}
                    />
                  </div>)
                )}
              </div>
              <ul className="dots-cover">
                {sliderNews.map((item, i) =>
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
              {gridNews.map((item, i) =>
                (<BoxCard
                  key={i.toString()}
                  img={`${API_ROOT}${item.image}`}
                  subTitle={item.subTitle}
                  title={item.title}
                  text={item.short_description}
                  video={item.video_url}
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
