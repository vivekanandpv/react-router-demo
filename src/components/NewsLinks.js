import React from 'react';
import { Link } from 'react-router-dom';

const NewsLinks = props => {
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
    </React.Fragment>
  );
};

export default NewsLinks;
