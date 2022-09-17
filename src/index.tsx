import React from 'react'
import ReactDOM from 'react-dom/client'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.scss'

import App from './App'

import reducer from './store/reducers'


// const rootReducer = combineReducers({ reducer: reducer })
const rootReducer = combineReducers({reducer})
const store = createStore(rootReducer, applyMiddleware(thunk))

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>TESTE TS</h1>
      <App />
    </Provider>
  </React.StrictMode>,
  // document.getElementById('root') as HTMLElement
)
