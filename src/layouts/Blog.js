import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Siema from 'siema';

class Blog extends Component {

  componentDidMount() {
    this.showSlider();
  }

  showSlider() {
    const mySlider = new Siema({
      selector: '.c-slider',
      duration: 500,
      easing: 'ease-out',
      perPage: 1,
      startIndex: 0,
      draggable: false,
      threshold: 20,
      loop: false,
      onInit: () => {},
      onChange: () => {},
    });

    Siema.prototype.addPagination = function() {
      var containerBtn = document.createElement('DIV');
      containerBtn.className = 'c-slider__container-btn';
      this.selector.appendChild(containerBtn);
      for (let i = 0; i < this.innerElements.length; i++) {
        const btn = document.createElement('button');
        btn.textContent = i;
        btn.className = "c-slider__btn-slider"
        if (i === 0) {
          btn.classList.add('selected');
        }
        btn.addEventListener('click', () => this.goTo(i));
        containerBtn.appendChild(btn);
      }

      const btnSlider = document.querySelectorAll('.c-slider__btn-slider');

      for (var i = 0; i < btnSlider.length; i++) {
        btnSlider[i].addEventListener('click', function(event) {
          for (var j = 0; j < btnSlider.length; j++) {
            if (btnSlider[j].classList.contains('selected')) {
              btnSlider[j].classList.remove('selected');
            }
          }
          this.classList.add('selected');
        });
      }
    }
    mySlider.addPagination();
  }

  render() {
    return (
      <div>
        <Header />
          <div className="l-blog">
            <div className="row">
              <div className="small-7 large-offset-5 columns l-blog__header c-slider">
                <div className="c-slider__item_blog">
                  <span className="text -ff1-m -color-2 -uppercase">Use Cases</span>
                  <h1 className="text -ff2-xl -white -underline">How an Amazonas Moisture Index helped the Yanomami tribe</h1>
                </div>
                <div className="c-slider__item_blog">
                  <span className="text -ff1-m -color-2 -uppercase">NEWS</span>
                  <h1 className="text -ff2-xl -white -underline">Expanding Access to Earth Observation Data.</h1>
                </div>
                <div className="c-slider__item_blog">
                  <span className="text -ff1-m -color-2 -uppercase">NEW FEATURES</span>
                  <h1 className="text -ff2-xl -white -underline">On minimizing the latency of serving painted raster tiles.</h1>
                </div>
                <div className="c-slider__item_blog">
                  <span className="text -ff1-m -color-2 -uppercase">NEWS</span>
                  <h1 className="text -ff2-xl -white -underline">Expanding Access to Earth Observation Data.</h1>
                </div>
                <div className="c-slider__item_blog">
                  <span className="text -ff1-m -color-2 -uppercase">Use Cases</span>
                  <h1 className="text -ff2-xl -white -underline">How an Amazonas Moisture Index helped the Yanomami tribe</h1>
                </div>
              </div>
            </div>
          </div>
        <Footer />
      </div>
    )
  };
}

export default Blog;
