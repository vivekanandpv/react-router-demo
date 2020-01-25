import React from 'react';

const Navbar = props => {
  return (
    <React.Fragment>
      <nav className='navbar navbar-dark bg-dark'>
        <a className='navbar-brand' href='#'>
          <img
            src='logo512.png'
            width='30'
            height='30'
            className='d-inline-block align-top mr-2'
            alt=''
          />
          React Router Demo
        </a>
      </nav>
    </React.Fragment>
  );
};

export default Navbar;
