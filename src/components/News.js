import React from 'react';
import NewsNavigation from './NewsNavigation';

const News = props => {
  const basePath = props.match.url;
  return (
    <React.Fragment>
      <NewsNavigation basePath={basePath}></NewsNavigation>
    </React.Fragment>
  );
};

export default News;
