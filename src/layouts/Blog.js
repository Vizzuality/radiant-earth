import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

class Blog extends Component {
  render() {
    return (
      <div>
        <Header />
        Hi!! This is the blog
        <Footer />
      </div>
    )
  };
}

export default Blog;
