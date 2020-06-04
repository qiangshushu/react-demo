import React from 'react';
import { Switch, Route, Link, NavLink, useRouteMatch, Prompt } from 'react-router-dom';
import Topic from './Topic';

function Topics() {
  const match = useRouteMatch();
  return (
    <div>
      <ul>
        <li>
          <NavLink to={`${match.url}/components`} className="is-active">
            Components
          </NavLink>
        </li>
        <li>
          <NavLink to={`${match.url}/props-v-state`} className="is-active">
            Props v. State
          </NavLink>
        </li>
      </ul>

      <Prompt when={true} message="您确定要离开吗？" />

      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic></Topic>
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

export default Topics;
