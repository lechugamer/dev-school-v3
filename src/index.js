import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import video from './assets/video_bg.mp4';
import App from './components/App'
import { BrowserRouter } from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
        <video
        autoPlay
        loop
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);


