import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';

//  All the components are imported using React.lazy()
//  Read more about dynamic import using import()
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#dynamic_imports
//  Also, read more about Promise API
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise
//  Important: React.lazy currently only supports default exports.

//  Step 1
const Home = React.lazy(() => import('./Home'));
const Calculator = React.lazy(() => import('./Calculator'));
const NotFound = React.lazy(() => import('./NotFound'));
const Travel = React.lazy(() => import('./Travel'));
const NewsRoutes = React.lazy(() => import('./NewsRoutes'));

const PrimaryRoutes = (props) => {
  return (
    <React.Fragment>
      {/* Step 2: Wrap the routes in Suspense and provide a fallback JSX */}
      <React.Suspense fallback={<div>Loading app...</div>}>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/calculator' component={Calculator}></Route>
          <Route
            exact
            path='/travel/:year/:month/:day'
            component={Travel}
          ></Route>
          <Redirect from='/home' to='/' />
          <NewsRoutes></NewsRoutes>
          <Route component={NotFound}></Route>
        </Switch>
      </React.Suspense>
    </React.Fragment>
  );
};

export default PrimaryRoutes;
