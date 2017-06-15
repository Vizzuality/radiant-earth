import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
          Hi!! This is the home
        <Footer />
      </div>
    )
  };
}

export default Home;
