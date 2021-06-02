import { useState } from "react";
import { Route, Switch } from 'react-router-dom';
import Navbar from "./components/dashboard/navbar/Navbar";
import Sidebar from "./components/dashboard/sidebar/Sidebar";
import Dashboard from "./components/dashboard/home/Home"
import Users from "./components/dashboard/users/Users";
import Login from './components/login/Login';
import video from './assets/video_bg.mp4';

const App = () => {
  const [sidebarOpen, setsidebarOpen] = useState(false);
  const openSidebar = () => {
    setsidebarOpen(true);
  };
  const closeSidebar = () => {
    setsidebarOpen(false);
  };
  return (
    <div className="container-app">
      <Navbar sidebarOpen={sidebarOpen} openSidebar={openSidebar} />
      <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
        <Switch>
          <Route path='/dashboard' exact component={Dashboard} />
          <Route path='/users' exact component={Users} />
          <Route path='/' exact component={Login} />
        </Switch>
    </div>
  );
};

export default App;