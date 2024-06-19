import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import RoutePath from "./routes/RoutePath";
import { Button, FluentProvider, teamsDarkTheme, teamsHighContrastTheme, teamsLightTheme, webDarkTheme, webLightTheme } from "@fluentui/react-components";
import { useSession } from "./providers/SessionProvider";
import { useLocalStorage } from "./hooks/useLocalStorage";
import TopBar from "./controls/TopBar";
import { Content, PageContent, ScreenFull } from "./layout/Container";
import StatusBar from "./controls/StatusBar";



const App = () => {



  const { theme } = useSession();

  const getTheme = () => {
    return theme === "webLightTheme" ? webLightTheme :
      theme === "webDarkTheme" ? webDarkTheme :
        theme === "teamsLightTheme" ? teamsLightTheme :
          theme === "teamsDarkTheme" ? teamsDarkTheme :
            theme === "teamsHighContrastTheme" ? teamsHighContrastTheme : webLightTheme;
  }

  const [isOpen, setIsOpen] = useState(false);

  return (
    <FluentProvider theme={getTheme()}>
      <ScreenFull>
        <TopBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <PageContent>
          <Navbar />
          <RoutePath />
        </PageContent>
        <StatusBar />
      </ScreenFull>
    </FluentProvider>
  );
};
export default App;
