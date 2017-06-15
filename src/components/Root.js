import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import About from './About';

const Root = ({ store }) => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/about" component={About}/>
    </div>
  </Router>
);

export default Root;
