import { React } from 'react'
import { Route, Switch } from 'react-router-dom';
import './Login.css';

import Form from './form/Form';
import Main from './main/Main'

const Login = () => {
  return (
      <div className="container">
        <Switch>
          <div className="wrapper">
            <Route path="/" component={Form} />
            <Route path="/" component={Main} />
          </div>
        </Switch>
      </div>
  );
}

export default Login;