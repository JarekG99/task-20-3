import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, hashHistory } from 'react-router';
import routes from './routes';

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './DevTools';

render(
  <Provider store={store}>
    <Router history={hashHistory} routes={routes} />
  </Provider>,
    // <div className='App'>
    //   <h1>List of countries: </h1>
    //
    //   <DevTools />
    // </div>

   document.getElementById('root')
 );
// store.dispatch(getCountries());

registerServiceWorker();
