import React from 'react';
import { useParams } from 'react-router-dom';

const Travel = props => {
  let { year, month, day } = useParams();
  return (
    <React.Fragment>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Day: {day}</p>
    </React.Fragment>
  );
};

export default Travel;
