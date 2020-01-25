import React from 'react';
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <div className='container'>
        <header className='App-header'>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className='App-link'
            href='https://reactjs.org'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn React
          </a>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
