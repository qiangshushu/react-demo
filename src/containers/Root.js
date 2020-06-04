import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import ScrollToTop from '../tools/ScrollToTop';
import configureStore from '../configureStore';
import AsyncApp from './AsyncApp';
import App from '../components/App';

const store = configureStore();

const Root = () => (
  <Provider store={store}>
    <Router>
      <ScrollToTop />
      {/* <AsyncApp /> */}
      {/* <App></App> */}
      <Route path="/:filter?" component={App} />
    </Router>
  </Provider>
);

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('./AsyncApp', Root);
}

export default Root;
