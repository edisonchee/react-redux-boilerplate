import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ReduxRouter } from '@lagunovsky/redux-react-router';
import { store, history } from './store';
import App from './components/App';

ReactDOM.render(
  <Provider store={ store }>
    <ReduxRouter 
      history={ history }
      store={ store }
      children={ <App /> }
    />
  </Provider>,
  document.getElementById('root')
);
