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
import OurTeam from './OurTeam';

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route exact path="/explore" component={Explore} />
      <Route exact path="/about" component={About} />
      <Route exact path="/get-involved" component={GetInvolved} />
      <Route exact path="/news" component={News} />
      <Route exact path="/our-team" component={OurTeam} />
    </div>
  </Router>
);

export default Root;
