import * as React from "react";
import NavBar from "./components/NavBar";
import NavBarHe from "./componentsHe/NavBarHe";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import { createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { ColorModeContext } from "./App";
import {
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  Zoom,
  Backdrop,
  CircularProgress,
  Box,
} from "@mui/material";
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
      <div>
        <Zoom in={true} timeout={1000}>
          <div
            style={{
              display: "flex",
              Top: 1,
              justifyContent:
                language !== "he" || isSmallScreen ? "flex-start" : "flex-end",
            }}
          >
            <FormControl>
              <Select
                id="language-select"
                open={open}
                value={language}
                onChange={handleChange}
                onClick={handleOpen}
                startAdornment={
                  <InputAdornment position={isSmallScreen ? "start" : "end"}>
                    {language !== "he" || isSmallScreen ? (
                      <LanguageOutlinedIcon />
                    ) : (
                      ""
                    )}
                  </InputAdornment>
                }
                style={{ border: "none" }}
              >
                <MenuItem value="">English</MenuItem>
                <MenuItem value="he">עברית</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Zoom>
      </div>
      {reloading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
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
      ) : language !== "he" ? (
        <NavBar color={color} theme={theme} colorMode={colorMode} />
      ) : (
        <NavBarHe color={color} theme={theme} colorMode={colorMode} />
      )}
    </Box>
  );
}
