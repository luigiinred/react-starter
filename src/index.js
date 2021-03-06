import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { browserHistory } from 'react-router';
import rootReducer from './reducers/';
import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import persistState from 'redux-localstorage';


const sagaMiddleware = createSagaMiddleware()
const StoreInstance = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), persistState(/*paths, config*/),
))
StoreInstance.subscribe(() => console.log(StoreInstance.getState()));
sagaMiddleware.run(sagas)

ReactDOM.render(
  <Provider store={StoreInstance}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
);
