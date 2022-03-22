import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = (props) => {
  const history = useHistory();

  const navigationHandler = () => {
    history.push('/travel/2021/04/28');
  };

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Home</h1>
          <p className='lead'>This is home.</p>
          <button className='btn btn-primary' onClick={navigationHandler}>
            To Travel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
