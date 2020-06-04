import logger from './logger';
import crashReporter from './crashReporter';

// function applyMiddleware(store, middlewares) {
//   middlewares = middlewares.slice();
//   middlewares.reverse();
//   let dispatch = store.dispatch;
//   middlewares.forEach(middleware => {
//     dispatch = middleware(store)(dispatch);
//   });
//   return Object.assign({}, store, { dispatch });
// }

// export default store => applyMiddleware(store, [logger, crashReporter]);
const middlewares = [logger, crashReporter];

export default middlewares;
