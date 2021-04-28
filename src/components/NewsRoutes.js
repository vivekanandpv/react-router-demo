import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import BreakingNews from './BreakingNews';
import NationalNews from './NationalNews';
import WorldNews from './WorldNews';
import NewsNotFound from './NewsNotFound';

const NewsRoutes = (props) => {
  return (
    <React.Fragment>
      <Route
        path='/news'
        render={({ match: { url } }) => (
          <>
            {/* Switch is required for unique routing, wildcard will not work properly otherwise (duplicated) */}
            <Switch>
              <Redirect from={`${url}`} to={`${url}/breaking-news`} exact />
              <Route
                path={`${url}/breaking-news`}
                component={BreakingNews}
                exact
              />
              <Route
                path={`${url}/national-news`}
                component={NationalNews}
                exact
              />
              <Route path={`${url}/world-news`} component={WorldNews} exact />
              <Route component={NewsNotFound}></Route>
            </Switch>
          </>
        )}
      ></Route>
    </React.Fragment>
  );
};

export default NewsRoutes;
