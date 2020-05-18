import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import IndexSagas from './saga';

const sagaMiddleware = createSagaMiddleware();

const reduxDevTool = '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__';
declare global {
  interface Window {
    [reduxDevTool]?: typeof compose;
  }
}
const composeEnhancer =
  (process.env.NODE_ENV !== 'production' && window[reduxDevTool]) || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(IndexSagas);

export default store;
