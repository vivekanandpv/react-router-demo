import React from 'react';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';

function useQuery() {
  return queryString.parse(useLocation().search);
}

const Travel = props => {
  let query = useQuery();
  console.log(query);
  return (
    <React.Fragment>
      <p>Query Year: {query.year}</p>
      <p>Query Month: {query.month}</p>
      <p>Query Day: {query.day}</p>
    </React.Fragment>
  );
};

export default Travel;
