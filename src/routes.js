import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={ Home } />
    <Route exact path="/about" component={ About } />
  </Switch>
);

export default Routes;