import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Home from './Home';
import Blog from './Blog';
import About from './About';
import Login from './Login';
import AddBlog from './AddBlog';
import Dashboard from './Dashboard';
import Account from './Account';
import AddCategory from './AddCategory';

const Root = ({ store }) => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/admin/login" component={Login}/>
      <Route exact path="/admin/add-blog" component={AddBlog}/>
      <Route exact path="/admin/dashboard" component={Dashboard}/>
      <Route exact path="/account" component={Account}/>
      <Route exact path="/admin/add-category" component={AddCategory}/>
    </div>
  </Router>
);

export default Root;
