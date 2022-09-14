import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, Store } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import './index.scss';

import App from './App';

import reducer from './store/reducers'

// import { InitialState, Action, DispatchType } from 'common/types'


const store = createStore(reducer, applyMiddleware(thunk))

// const store: Store<InitialState, Action> & {
//   dispatch: DispatchType
// } = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <h1>TESTE JS</h1>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
