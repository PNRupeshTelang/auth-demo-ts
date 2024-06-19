import React from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import { useSession } from "../providers/SessionProvider";

import {
  makeStyles,
  Button,
  Link,
  RadioGroup,
  Radio,
  Switch,
  Drawer,
  DrawerProps,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
} from "@fluentui/react-components";


export const Navbar = () => {
  const { user } = useAuth();

  return (
    <>
      <nav>
        <Link style={{ margin: "0.5rem", color: "red" }}> <NavLink to="/">Home</NavLink></Link>
        <Link style={{ margin: "0.5rem" }}> <NavLink to="/about">About</NavLink></Link>
        {user.username && <Link style={{ margin: "0.5rem" }} > <NavLink to="/profile">Profile</NavLink></Link>}
        {!user.username && <Link style={{ margin: "0.5rem" }} > <NavLink to="/login">Login</NavLink></Link>}
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/extra">Extra</NavLink></Link>
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/controls">Controls</NavLink></Link>
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/dashboard">Dashboard</NavLink></Link>
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/master">Master</NavLink></Link>
      </nav>
    </>
  );
};
