import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import Home from './Home';
import Calculator from './Calculator';
import NotFound from './NotFound';
import Travel from './Travel';
import NewsRoutes from './NewsRoutes';

const PrimaryRoutes = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/calculator' component={Calculator}></Route>
        {/* Need to remove exact as /news now has child routes */}
        <NewsRoutes></NewsRoutes>
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
