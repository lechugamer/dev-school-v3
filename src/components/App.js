import { React, useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './login/Login';
import DashboardScreen from './dashboard/Dashboard';
import Users from './dashboard/users/Users';
import Navbar from './dashboard/navbar/Navbar';
import Sidebar from './dashboard/sidebar/Sidebar';

const App = () => {
  
  return (
    <Router>
        <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/dashboard" exact component={DashboardScreen} />
            <Route path="/users" component={Users} />
        </Switch>
    </Router>
  );
}

export default App;
