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
  Switch
} from "@fluentui/react-components";


export const Navbar = () => {
  const { user } = useAuth();
  const { setTheme, setLanguage } = useSession();

  const onThemeChanged = (e) => {
    setTheme((e.currentTarget.checked ? "webDarkTheme" : "webLightTheme"));
  };




  return (
    <>
      <nav>
        <Link style={{ margin: "0.5rem", color: "red" }}> <NavLink to="/">Home</NavLink></Link>
        <Link style={{ margin: "0.5rem" }}> <NavLink to="/about">About</NavLink></Link>
        {user.username && <Link style={{ margin: "0.5rem" }} > <NavLink to="/profile">Profile</NavLink></Link>}
        {!user.username && <Link style={{ margin: "0.5rem" }} > <NavLink to="/login">Login</NavLink></Link>}
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/extra">Extra</NavLink></Link>
        <Link style={{ margin: "0.5rem" }} > <NavLink to="/dashboard">Dashboard</NavLink></Link>
      </nav>


      <div className="container">
        <Switch label="Dark Mode" onClick={onThemeChanged} />
      </div>

      <div className="container">

        <Button onClick={() => setLanguage("English")}>English</Button>
        <Button onClick={() => setLanguage("Hindi")}>Hindi</Button>
        <Button onClick={() => setLanguage("German")}>German</Button>
        <Button onClick={() => setLanguage("French")}>French</Button>
        <Button onClick={() => setLanguage("Japenese")}>Japenese</Button>

      </div>

    </>

  );
};
