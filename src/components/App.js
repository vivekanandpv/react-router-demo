import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import PrimaryRoutes from './PrimaryRoutes';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <div className='container'>
          <PrimaryRoutes></PrimaryRoutes>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
