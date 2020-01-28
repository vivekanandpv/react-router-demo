import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import WorldNews from './WorldNews';
import NationalNews from './NationalNews';
import NewsNotFound from './NewsNotFound';
import BreakingNews from './BeakingNews';

const NewsRoutes = props => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path={`${props.basePath}/breaking-news`}
          component={BreakingNews}
          exact
        ></Route>
        <Route
          path={`${props.basePath}/world-news`}
          component={WorldNews}
          exact
        ></Route>
        <Route
          path={`${props.basePath}/national-news`}
          component={NationalNews}
          exact
        ></Route>
        {/* Redirection should come at the last, but before wildcard (use exact for redirect) */}
        <Redirect
          from={`${props.basePath}`}
          to={`${props.basePath}/breaking-news`}
          exact
        ></Redirect>
        {/* For wild card no need to mention path. This is the wild card only for /news/... */}
        <Route component={NewsNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default NewsRoutes;
