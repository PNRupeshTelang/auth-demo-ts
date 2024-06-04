import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Login from "../components/Login";
import Profile from "../components/Profile";
import Authentication from "./Authentication";
import Authorization from "./Authorization";
import PERMISSIONS from "../permissions/permissions";
import Extra from "../components/Extra";
import Dashboard from "../components/Dashboard";
import Controls from "../components/Controls";
import Messages from "../components/Messages";
import Tasks from "../components/Tasks";

const RoutePath = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route element={<Authorization permissions={[PERMISSIONS.CAN_VIEW_ABOUT]} />} >
        <Route path="about" element={<About />} />
      </Route>
      <Route path="profile" element={
        <Authentication>
          <Profile />
        </Authentication>
      }
      />
      <Route path="dashboard" element={
        <Authentication>
          <Dashboard />
        </Authentication>
      }
      >
        <Route path="messages" element={
          <Authentication>
            <Messages />
          </Authentication>} />
        <Route path="tasks" element={<Authentication>
          <Tasks />
        </Authentication>} />
      </Route>


      <Route path="extra" element={<Extra />} />
      <Route path="controls" element={<Controls />} />

      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default RoutePath;
