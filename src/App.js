import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from './components/Login'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" render={()=><Login />} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
