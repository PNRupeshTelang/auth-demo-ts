import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { useSession } from "../providers/SessionProvider";
import { NavLink, Outlet } from "react-router-dom";
import { Link } from "@fluentui/react-components";

const Dashboard = () => {
    const { user } = useAuth();
    const { theme, language } = useSession();

    return (
        <>
            <span>Inner Pages</span>
            <nav>
                <Link style={{ margin: "0.5rem" }} > <NavLink to="messages">Messages</NavLink></Link>
                <Link style={{ margin: "0.5rem" }} > <NavLink to="tasks">Tasks</NavLink></Link>
            </nav>

            <h1>Dashboard {user.username}</h1>
            <h1>Session {theme} {language}</h1>

            <Outlet />
        </>
    );
};

export default Dashboard;
