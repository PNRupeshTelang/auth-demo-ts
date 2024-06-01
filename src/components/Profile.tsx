import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { useSession } from "../providers/SessionProvider";
const Profile = () => {
  const { user, logout } = useAuth();
  const logoutHandler = () => {
    logout();
  };

  const { theme, language } = useSession();


  return (
    <>
      <h1>Welcome {user.username}</h1>
      <h1>Session {theme} {language}</h1>


      <button type="submit" onClick={logoutHandler}>
        Logout
      </button>


      <p>

      </p>
    </>
  );
};

export default Profile;
