import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.scss'

import App from './App'

import reducer from './store/reducers'

// O index.js está sendo utilizado ao invés deste

const rootReducer = combineReducers({reducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
