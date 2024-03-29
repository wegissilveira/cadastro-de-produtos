import React from 'react';
import ReactDOM from 'react-dom';

import { 
  createStore, 
  // applyMiddleware, 
  // Store 
} from 'redux'
import { Provider } from 'react-redux'
// import thunk from 'redux-thunk'

import './index.scss';

import App from './App';

import reducer from './store/reducers';


const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
)
