import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import HomePage from "./Home";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode() {
  const date = new Date();
  const hour = date.getHours();
  const isDayTime = hour > 6 && hour > 20;

  const [mode, setMode] = React.useState(isDayTime ? "light" : "dark");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <HomePage color={theme.palette.mode} />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
