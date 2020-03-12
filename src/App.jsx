import React, { Component } from 'react';
import logo from './logo.svg';
import './App.scss';

import {
	BrowserRouter as Router,
	Route,
	Switch,
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

export default App;
