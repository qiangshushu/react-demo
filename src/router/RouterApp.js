import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Inbox from './Inbox';
import Foo from './Foo';
import Topics from './Topics';

class App extends React.Component {
  render() {
    const extraProps = { x: 1, y: 2 };
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/inbox">Inbox</Link>
          </li>
          <li>
            <Link to="/foo">Foo</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/inbox" component={Inbox}></Route>
          <Route
            path="/foo"
            render={props => {
              return (
                <div className={props.match ? 'active' : ''}>
                  <Foo {...props} data={extraProps}></Foo>
                </div>
              );
            }}
          ></Route>
          <Route path="/topics" component={Topics}></Route>
        </Switch>
      </div>
    );
  }
}

export default App;
