import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import App from '../App';
import About from '../components/about';
import AboutName from '../components/about-name';

const Routes = () => (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/about' component={About} />
      <Route path='/about/:account' component={AboutName} />
      <Route path='/about/:account/:id' component={AboutName} />
    </div>
  </Router>
);
export default Routes;
