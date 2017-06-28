import React, { Component } from 'react';
import Nav from './Nav';
import BurgerMenu from './BurgerMenu';

class CircleImages extends Component {

  constructor(props) {
    super(props);
    this.state = {
      imageBig: Math.floor((Math.random() * 4) + 1),
      imageMedium: Math.floor((Math.random() * 4) + 1),
      imageSmall: Math.floor((Math.random() * 4) + 1),
      firstBigImage: true,
      secondBigImage: false,
      firstMediumImage: true,
      secondMediumImage: false,
      firstSmallImage: true,
      secondSmallImage: false,
      countBigPicture: 0,
      countMediumPicture: 0,
      countrSmallPicture: 0,
      imagesSmall: [2,3,4,1],
      imagesMedium: [1,2,3,4],
      imagesBig: [4,3,2,1],
      count: 0,
    };
  }

  changeBigImage() {
    this.setState({
      imageBig: Math.floor((Math.random() * 4) + 1),
      firstBigImage: this.state.firstBigImage ? false : true,
      secondBigImage: this.state.secondBigImage ? false : true,
      count: this.state.count + 1,
    });

    if(this.state.count === 4) {
      this.setState({
        count: 0,
      });
    }
  }

  componentDidMount() {
    this.intervalId = setInterval(this.changeBigImage.bind(this), 4000);
  }

  componentWillUnmount(){
    clearInterval(this.intervalId);
  }

  render() {

    return (
      <div className="c-circle-images">
        <div className="c-header__back-gradient"></div>
        <div className={`c-header__big-picture -img-1 ${this.state.count === 0 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__big-picture -img-2 ${this.state.count === 1 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__big-picture -img-3 ${this.state.count === 2 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__big-picture -img-4 ${this.state.count === 3 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__medium-picture -img-1 ${this.state.count === 0 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__medium-picture -img-2 ${this.state.count === 1 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__medium-picture -img-3 ${this.state.count === 2 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__medium-picture -img-4 ${this.state.count === 3 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__small-picture -img-1 ${this.state.count === 0 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__small-picture -img-2 ${this.state.count === 1 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__small-picture -img-3 ${this.state.count === 2 ? '-visible' : '-hidden' }`}></div>
        <div className={`c-header__small-picture -img-4 ${this.state.count === 3 ? '-visible' : '-hidden' }`}></div>
      </div>
    )
  };
}

export default CircleImages;
