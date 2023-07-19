import * as React from "react";
import NavBar from "./components/NavBar";
import NavBarHe from "./componentsHe/NavBarHe";
import { createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./App";
import { Backdrop, CircularProgress, Box } from "@mui/material";
import "bootstrap/dist/css/bootstrap.min.css";

export default function HomePage({ color }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  const [language, setLanguage] = React.useState(navigator.language);
  const [open, setOpen] = React.useState(false);
  const [reloading, setReloading] = React.useState(false);

  const colorMode = React.useContext(ColorModeContext);

  const handleChange = (event) => {
    setReloading(true);
    setTimeout(() => {
      setLanguage(event.target.value);
      setReloading(false);
    }, 1000);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        bgcolor: "background.default",
        color: "text.primary",
      }}
    >
      {/* Navigation Bar */}
      {!reloading ? (
        language !== "he" ? (
          <NavBar
            handleOpen={handleOpen}
            color={color}
            open={open}
            colorMode={colorMode}
            handleChange={handleChange}
            language={language}
          />
        ) : (
          <NavBarHe
            handleOpen={handleOpen}
            color={color}
            open={open}
            colorMode={colorMode}
            handleChange={handleChange}
            language={language}
          />
        )
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="d-flex justify-content-center">
            <div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={true}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </div>
          </div>
        </div>
      )}
    </Box>
  );
}
