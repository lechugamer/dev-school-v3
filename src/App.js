import { useState } from "react";
import { Route, Switch } from "react-router-dom";
import video from './assets/video_bg.mp4';

import Navbar from "./components/dashboard/Navbar";
import Sidebar from "./components/dashboard/Sidebar";
import Dashboard from "./components/dashboard/Home";
import Users from "./components/dashboard/Users";
import Signin from "./components/login/Signin";

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div>
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
        zIndex: "-1",
      }}
    >
      <source src={video} type="video/mp4" />
    </video>
      <Switch>
        <Route path="/" exact>
          <div className="container-login">
            <div className="wrapper">
              <Signin />
            </div>
          </div>
        </Route>
        <div className="container-dashboard">
          <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
          <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
          <Route path="/dashboard" exact component={Dashboard} />
          <Route path="/users" exact component={Users} />
        </div>
      </Switch>
    </div>
  );
};

export default App;
