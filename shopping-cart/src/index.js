import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

import './index.css';

import App from './App';
import './App.css';

import registerServiceWorker from './registerServiceWorker';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()//looking for the presence of the function and calling it (including the extension we installed for our browser - devtools)
)

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
