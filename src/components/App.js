import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login/Login';
import DashboardScreen from './dashboard/Dashboard';
import Users from './dashboard/users/Users';

const App = () => {
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={DashboardScreen} />
        </Switch>
    </Router>
  );
}

export default App;
