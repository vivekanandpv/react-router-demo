import React from 'react';

const BreakingNews = (props) => {
  const goToCalculator = () => {
    props.history.push('/calculator');
  };

  const goToTravel = () => {
    props.history.push({
      pathname: '/travel/2021/04/28',
      //  if we need query string
      // search: '?year=2021&month=04&day=28',
    });
  };

  return (
    <React.Fragment>
      <div className='jumbotron jumbotron-fluid'>
        <div className='container'>
          <h1 className='display-4'>Breaking news</h1>

          <button className='btn btn-primary mr-3' onClick={goToCalculator}>
            Go to Calculator
          </button>

          <button className='btn btn-primary' onClick={goToTravel}>
            Go to Travel
          </button>
        </div>
      </div>
    </React.Fragment>
  );
};

export default BreakingNews;
