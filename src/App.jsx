// import React, { Component } from 'react';
// // import logo from './logo.svg';
// import './App.scss';

// import {
// 	BrowserRouter as Router,
// 	Route,
// 	Switch,
// 	Redirect
// } from 'react-router-dom';

// import { MainPage } from './pages/main';
// import { UsersPage } from './pages/users';
// import { NotFoundPage } from './pages/404';
// //import UsersPage from './pages';

// class App extends Component {
// 	render() {
// 		return (
//       <div className="App">
//         <header className="App-header">
//           <Router>
//             <Switch>
//               <Route exact path='/my-app' component={MainPage} />
//               <Route exact path='/my-app/users' component={UsersPage} />
//               <Route exact path='/my-app/404' component={NotFoundPage} />
//               <Redirect to='/my-app/404'/>
//             </Switch>
//           </Router>
//         </header>
//       </div>
// 		);
// 	}
// }

// export default App;


import React from 'react';
import Index from './Home';

export const App = () => {
  return <Index />
}