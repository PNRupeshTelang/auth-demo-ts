import React from "react";
import { Navbar } from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import { Button, FluentProvider, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { useSession } from "./providers/SessionProvider";
import { useLocalStorage } from "./hooks/useLocalStorage";



const App = () => {



  const { theme } = useSession();

  const getTheme = () => {
    return theme === "webLightTheme" ? webLightTheme :
      theme === "webDarkTheme" ? webDarkTheme :
        theme === "teamsLightTheme" ? teamsLightTheme :
          theme === "teamsDarkTheme" ? teamsDarkTheme :
            theme === "teamsHighContrastTheme" ? teamsHighContrastTheme : webLightTheme;
  }

  return (
    <FluentProvider theme={getTheme()}>
      <div className="container">
        <Navbar />
        <RoutePath />
      </div>
    </FluentProvider>
  );
};
export default App;
