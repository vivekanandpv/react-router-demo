import React from 'react';
import './App.css';
import Navbar from './Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import NotFound from './NotFound';
import Travel from './Travel';
import BreakingNews from './BreakingNews';
import NationalNews from './NationalNews';
import WorldNews from './WorldNews';
import NewsNotFound from './NewsNotFound';
import PrimaryRoutes from './PrimaryRoutes';

function App(props) {
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
