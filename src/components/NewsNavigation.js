import React from 'react';
import NewsRoutes from './NewsRoutes';
import NewsLinks from './NewsLinks';

const NewsNavigation = props => {
  console.log(`${props.basePath}/world-news`);
  return (
    <React.Fragment>
      <NewsLinks basePath={props.basePath}></NewsLinks>
      <hr></hr>
      <NewsRoutes basePath={props.basePath}></NewsRoutes>
    </React.Fragment>
  );
};

export default NewsNavigation;
