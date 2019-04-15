import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './store/reducers/index';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

const rootApp = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(rootApp, document.getElementById('root'));
registerServiceWorker();
