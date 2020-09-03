import React from 'react';
import { hot } from 'react-hot-loader/root';

import Nav from './Nav';
import Routes from '../routes';

const App = () => (
  <div>
    <Nav />
    <Routes />
  </div>
);

export default hot(App);