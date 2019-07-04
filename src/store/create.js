import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import reducer from '../reducers';
import mySaga from '../sagas';

export default () => {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger),
  );

  sagaMiddleware.run(mySaga);

  return store;
};
