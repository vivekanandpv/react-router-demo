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
import News from './News';
import NotFound from './NotFound';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/calculator' component={Calculator}></Route>
          <Route exact path='/news' component={News}></Route>
          <Redirect from='/home' to='/' />
          <Route exact path='*' component={NotFound}></Route>
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
