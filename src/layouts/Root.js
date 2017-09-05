import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

import Home from './Home';
import Explore from './Explore';
import About from './About';
import GetInvolved from './GetInvolved';
import News from './News';

// import Blog from './Blog';
// import Login from './Login';
// import AddBlog from './AddBlog';
// import EditBlog from './EditBlog';
// import Dashboard from './Dashboard';
// import Account from './Account';
// import AddCategory from './AddCategory';
// import EditCategory from './EditCategory';


const Root = ({ store }) => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/about" component={About} />
      <Route exact path="/get-involved" component={GetInvolved} />
      <Route exact path="/news" component={News} />
      {/*<Route exact path="/blog" component={Blog}/>
      <Route exact path="/admin/login" component={Login}/>
      <Route exact path="/admin/add-blog" component={AddBlog}/>
      <Route exact path="/admin/dashboard" component={Dashboard}/>
      <Route exact path="/account" component={Account}/>
      <Route exact path="/admin/add-category" component={AddCategory}/>
      <Route exact path="/admin/edit-category" component={EditCategory}/>
      <Route exact path="/admin/edit-blog" component={EditBlog}/>*/}
    </div>
  </Router>
);

export default Root;