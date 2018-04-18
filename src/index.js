import React from 'react';
import { render }  from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

// import './index.css';
// import App from './App';
import registerServiceWorker from './registerServiceWorker';
import DevTools from './DevTools';
import  {getCountries} from './actions/actions-countries';

render(
  <Provider store={store}>
    <div className='App'>
      <h1>List of countries: </h1>

      <DevTools />
    </div>
  </Provider>,
   document.getElementById('root')
 );
store.dispatch(getCountries());

registerServiceWorker();
