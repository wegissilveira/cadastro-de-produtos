import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.scss';

import App from './App';

import reducer from './store/reducers'


const rootReducer = combineReducers({ reducer: reducer })
const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
