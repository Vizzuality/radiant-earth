import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Login from './Login';
import AddBlog from './AddBlog';

const Root = ({ store }) => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/admin/login" component={Login}/>
      <Route exact path="/admin/add-blog" component={AddBlog}/>
    </div>
  </Router>
);

export default Root;
