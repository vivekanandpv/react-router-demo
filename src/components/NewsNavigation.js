import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import WorldNews from './WorldNews';
import NationalNews from './NationalNews';
import NewsNotFound from './NewsNotFound';
import BreakingNews from './BeakingNews';

const NewsNavigation = props => {
  console.log(`${props.basePath}/world-news`);
  return (
    <React.Fragment>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <Link className='nav-link' to={props.basePath + '/breaking-news'}>
            Breaking News
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to={props.basePath + '/national-news'}>
            National News
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to={props.basePath + '/world-news'}>
            World news
          </Link>
        </li>
      </ul>

      <hr></hr>
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
        {/* Redirection should come at the last, but before wildcard */}
        <Redirect
          from={`${props.basePath}`}
          to={`${props.basePath}/breaking-news`}
        ></Redirect>
        {/* For wild card no need to mention path. This is the wild card only for /news/... */}
        <Route component={NewsNotFound}></Route>
      </Switch>
    </React.Fragment>
  );
};

export default NewsNavigation;
