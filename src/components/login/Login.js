import { React } from 'react'
import { Route, Switch } from 'react-router-dom';
import './Login.css';
import video from '../../assets/video_bg.mp4';

import Form from './form/Form';
import Main from './main/Main'

const Login = () => {
  return (
      <div className="container">
        <Switch>
          <div className="wrapper">
          <video
      autoPlay
      loop
      style={{
        position: "fixed",
        width: "100vw",
        left: "50%",
        top: "50%",
        height: "100vh",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "0",
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
            <Route path="/" component={Form} />
            <Route path="/" component={Main} />
          </div>
        </Switch>
      </div>
  );
}

export default Login;