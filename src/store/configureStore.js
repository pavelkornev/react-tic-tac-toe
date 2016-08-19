import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducers from '../reducers';


export default function configureStore(initialState) {
  const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    combineReducers({
      ...reducers,
    }),
    initialState,
    compose(
      applyMiddleware(
        sagaMiddleware
      ),
      // Activates Chrome DevTools extension - https://github.com/zalmoxisus/redux-devtools-extension
      process.env.NODE_ENV !== 'production' && typeof window === 'object' && window.devToolsExtension ? window.devToolsExtension() : f => f // eslint-disable-line max-len
    )
  );

  // redux-saga API
  store.runSaga = sagaMiddleware.run;

  return store;
}
