import React from 'react';
import { useParams } from 'react-router-dom';

const Travel = props => {
  console.log(props.match); //  check this as well
  let { year, month, day } = useParams(); //  more convenient way
  return (
    <React.Fragment>
      <p>Year: {year}</p>
      <p>Month: {month}</p>
      <p>Day: {day}</p>
    </React.Fragment>
  );
};

export default Travel;
