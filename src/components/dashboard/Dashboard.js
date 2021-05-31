import { useState } from "react";
import { Route, Router, Switch } from 'react-router-dom';
import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";
import Dashboard from "./home/Home";
import Users from "./users/Users"
import './Dashboard.css';


const DashboardScreen = () => {
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
          <Route path='/users' exact component={Users} />
        </Switch>
    </div>
  );
};

export default DashboardScreen;