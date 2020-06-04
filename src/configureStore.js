import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

import middlewares from './middlewares';
import monitorReducersEnhancer from './enhancers/monitorReducer';
import rootReducer from './reducers';

const loggerMiddleware = createLogger();

function configureStore(preloadedState) {
  const middlewareEnhancer = applyMiddleware(...middlewares, thunkMiddleware, loggerMiddleware);
  const composedEnhancers = composeWithDevTools(middlewareEnhancer, monitorReducersEnhancer);
  const store = createStore(rootReducer, preloadedState, composedEnhancers);

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./reducers', () => store.replaceReducer(rootReducer));
  }
  return store;
}

export default configureStore;
