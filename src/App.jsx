import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import {
	BrowserRouter as Router,
	Route,
	Switch,
	Link,
	Redirect
} from 'react-router-dom';

import MainPage from './pages/main.jsx';
import UsersPage from './pages/users.jsx';
import NotFoundPage from './pages/404.jsx';
//import UsersPage from './pages';

class App extends Component {
	render() {
		return (
      <div className="App">
        <header className="App-header">
          <Router>
            <Switch>
              <Route exact path='/my-app' component={MainPage} />
              <Route exact path='/my-app/users' component={UsersPage} />
              <Route exact path='*' component={NotFoundPage} />
              <Redirect to='/my-app/404'/>
            </Switch>
          </Router>
        </header>
      </div>
		);
	}
}

function OldApp() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Good things come to those who wait.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
