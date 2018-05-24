import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Dashboard from './Components/dashboard';
import Account from './Components/account';
import Message from './Components/message';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path='/account' component={Account}/>
            <Route path='/dashboard' component={Dashboard}/>
            <Route path='/message/:id' component={Message}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
