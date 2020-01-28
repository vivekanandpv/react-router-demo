import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import React from 'react';

import Home from './Home';
import Calculator from './Calculator';
import News from './News';
import NotFound from './NotFound';
import Travel from './Travel';

const PrimaryRoutes = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/calculator' component={Calculator}></Route>
        {/* Need to remove exact as /news now has child routes */}
        <Route path='/news' component={News}></Route>
        <Route
          exact
          path='/travel/:year/:month/:day'
          component={Travel}
        ></Route>
        <Redirect from='/home' to='/' />
        <Route component={NotFound}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default PrimaryRoutes;
