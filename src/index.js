import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/';

const StoreInstance = createStore(rootReducer);

ReactDOM.render(
    <Provider store={StoreInstance}>
      <Routes history={browserHistory} />
    </Provider>,
  document.getElementById('root')
);
