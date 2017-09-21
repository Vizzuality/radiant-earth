import React, { Component } from 'react';
import ReactResizeDetector from 'react-resize-detector';
import PropTypes from 'prop-types';
import { Swipeable } from 'react-touch';
import browser from 'detect-browser';
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
      gridShowNumber: 0,
      widthCircle: 510
    };

    this.getSliderNews = this.getSliderNews.bind(this);
    this.getGridNews = this.getGridNews.bind(this);
  }

  componentDidMount() {
    this.getSliderNews();
    this.getGridNews();
  }

  onResize() {
    if (window.innerWidth < 1080) {
      this.setState({
        widthCircle: 310
      });
    } else {
      this.setState({
        widthCircle: 510
      });
    }
  }

  getSliderNews() {
    const self = this;
    fetch(`${API_BASE_URL}/posts?per_page=4`)
      .then(r => r.json())
      .then(data => self.setState({ sliderNews: data }));
  }

  getGridNews() {
    const self = this;
    fetch(`${API_BASE_URL}/posts?per_page=${this.state.gridShowNumber + 3}`)
      .then(r => r.json())
      .then(data => self.setState({
        gridNews: data,
        gridShowNumber: this.state.gridShowNumber + 3
      }));
  }

  changeSlider(slider) {
    if (slider >= 0 && slider <= this.state.gridNews.length) {
      this.setState({
        slider,
      });
    }
  }

  render() {
    const browserSafari = browser.name === 'safari';
    const browserIOS = browser.name === 'ios';
    const { slider, sliderNews, gridNews, widthCircle } = this.state;
    const { pathname } = this.props.location;
    return (
      <div>
        <Header currentPath={pathname} />
        <div className="l-news">
          <Swipeable
            onSwipeLeft={() => this.changeSlider(slider + 1)}
            onSwipeRight={() => this.changeSlider(slider - 1)}
          >
            <div className="l-news__cover">
              <div className="row">
                <div className={`columns large-6 medium-6 small-12 l-news__image ${browserSafari ? '-safari' : ''} ${browserIOS ? '-safari' : ''}`}>
                  {sliderNews.map((item, i) =>
                    (<div key={i.toString()} className={`circle-image ${i === slider ? '-show' : '-hidden'}`}>
                      <MotionCircle move={false} width={widthCircle.toString()} backgroundImage={`${API_ROOT}${item.image}`} />
                    </div>)
                  )}
                </div>
                <div className="columns large-6 medium-6 small-12 l-news__text-cover">
                  {sliderNews.map((item, i) =>
                    (<div key={i.toString()} className={`text-cover-contain ${i === slider ? '-show' : '-hidden'}`}>
                      <BoxTitleContent
                        title={item.title}
                        subTitle={item.category}
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
          </Swipeable>
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
                  url={item.url}
                />
                )
              )}
              <div className="contain-button large-12 medium-12 small-12">
                <button
                  className="c-button -back-gray text -uppercase -ff2-m"
                  onClick={() => this.getGridNews()}
                >load more</button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
        <ReactResizeDetector handleWidth handleHeight onResize={this.onResize.bind(this)} />
      </div>
    );
  }
}

News.propTypes = {
  location: PropTypes.object.isRequired,
};

export default News;
