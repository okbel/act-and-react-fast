import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'

import Home from './components/Home'
import Github from './components/Github'

const routes = (
  <Route path='/'>
    <IndexRoute component={Home} />
    <Route path='github' component={Github} />
  </Route>
);

const AppRouter = () => <Router history={browserHistory} routes={routes} />;

export default AppRouter;
