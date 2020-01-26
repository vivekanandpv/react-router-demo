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

function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar></Navbar>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Home}></Route>
            <Route exact path='/calculator' component={Calculator}></Route>
            {/* Need to remove exact as /news now has child routes */}
            <Route
              path='/news'
              render={({ match: { url } }) => (
                <>
                  {/* Switch is required for unique routing, wildcard will not work properly otherwise (duplicated) */}
                  <Switch>
                    <Redirect
                      from={`${url}`}
                      to={`${url}/breaking-news`}
                      exact
                    />
                    <Route
                      path={`${url}/breaking-news`}
                      component={BreakingNews}
                      exact
                    />
                    <Route
                      path={`${url}/national-news`}
                      component={NationalNews}
                      exact
                    />
                    <Route
                      path={`${url}/world-news`}
                      component={WorldNews}
                      exact
                    />
                    <Route component={NewsNotFound}></Route>
                  </Switch>
                </>
              )}
            ></Route>
            <Route
              exact
              path='/travel/:year/:month/:day'
              component={Travel}
            ></Route>
            <Redirect from='/home' to='/' />
            <Route component={NotFound}></Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
}

export default App;
