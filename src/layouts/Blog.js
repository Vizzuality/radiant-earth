import React, { Component } from 'react';
import axios from 'axios';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Slider from 'react-slick';
import Masonry from 'react-masonry-component';
import BlogGalleryItem from '../components/BlogGalleryItem';

class Blog extends Component {

  constructor (props) {
    super(props);

    this.state = {
      count: 1,
      posts: []
    };

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

    this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
  }

  loadCommentsFromServer() {
    axios.get(process.env.REACT_APP_API_POSTS_URL)
      .then(res => {
        this.setState({ posts: res.data });
      })
  }

  componentDidMount() {
    this.loadCommentsFromServer();
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
                <div key={i} className={`l-blog__circle-image -img-${item.image} ${this.state.count === item.image ? '-visible' : '-hidden' }`}></div>
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
                  {this.state.posts.map((item, i) =>
                    <BlogGalleryItem
                      key={i}
                      picture={item.picture}
                      category={item.category}
                      title={item.title}
                      summary={item.summary}
                      link={item.link}
                      source={item.source}
                    />
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
