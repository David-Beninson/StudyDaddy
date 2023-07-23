import * as React from "react";
import {
  useTheme,
  useMediaQuery,
  IconButton,
  Button,
  Typography,
  Box,
  Toolbar,
  Slide,
  useScrollTrigger,
  Fab,
  Select,
  MenuItem,
  FormControl,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Drawer,
} from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import HomeIcon from "@mui/icons-material/Home";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import LanguageSharpIcon from "@mui/icons-material/LanguageSharp";
import MenuIcon from "@mui/icons-material/Menu";

import "./styles.css";
import About from "./About/About";
import IntroducingCard from "./CardsComponents/IntroducingCard";
import LernMoreCard from "./CardsComponents/LernMoreCard";
import Contact from "./Contact/MainContact";

function ElevationScroll({ children }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window : undefined,
  });

  const shouldHide = trigger;

  return (
    <Slide appear={false} direction="down" in={!shouldHide}>
      {children}
    </Slide>
  );
}

function ScrollTop({ children, window }) {
  const trigger = useScrollTrigger({
    target: typeof window !== "undefined" ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Slide appear={false} direction="up" in={trigger}>
      <Fab
        color="none"
        size="small"
        onClick={handleClick}
        style={{ position: "fixed", bottom: 16, right: 16 }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Slide>
  );
}

export default function NavBar({
  colorMode,
  color,
  handleChange,
  handleOpen,
  open,
  language,
}) {
  const [smallOrLarg, setSmallOrLarg] = React.useState(null);
  const [prevScreen, setPrevScreen] = React.useState(smallOrLarg);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  React.useEffect(() => {
    setSmallOrLarg(isSmallScreen ? "small" : "larg");
    if (smallOrLarg !== prevScreen) {
      window.location.reload();
    }
  }, [isSmallScreen]);

  const navigateToSection = async (id) => {
    const element = document.querySelector(id);
    if (element) {
      await new Promise((resolve) =>
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
          resolve();
        }, 0)
      );
    }
  };

  return (
    <div>
      <nav style={{ top: 0 }}>
        <div
          style={{
            display: "flex",
            top: "0",
          }}
        >
          <FormControl>
            <Select
              id="language-select"
              startAdornment={
                <InputAdornment>
                  <LanguageSharpIcon
                    style={{ color: color === "dark" ? "black" : "white" }}
                  />
                </InputAdornment>
              }
              open={open}
              value={language}
              onChange={handleChange}
              onClick={handleOpen}
            >
              <MenuItem value="">English</MenuItem>
              <MenuItem value="he">עברית</MenuItem>
            </Select>
          </FormControl>
        </div>
        {!isSmallScreen && (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Button
                onClick={async () => {
                  navigateToSection("#home");
                }}
              >
                <HomeIcon />
              </Button>
              <Button
                onClick={async () => {
                  navigateToSection("#learn-more");
                }}
              >
                About
              </Button>
              <Button
                onClick={async () => {
                  navigateToSection("#about");
                }}
              >
                <InfoOutlinedIcon />
              </Button>
              <Button
                onClick={async () => {
                  navigateToSection("#contact");
                }}
              >
                <ContactSupportOutlinedIcon />
              </Button>
            </Box>
            <Box sx={{ position: "absolute", top: 0, right: 0 }}>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  colorMode.toggleColorMode();
                }}
                color="inherit"
              >
                {color === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </Box>
          </>
        )}
        {isSmallScreen && (
          <>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                position: "absolute",
                top: 0,
                right: 0,
              }}
              style={{ textAlign: "left" }}
            >
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerToggle}
              PaperProps={{ style: { height: "auto" } }}
            >
              <List>
                <ListItem
                  button
                  onClick={async () => {
                    await handleDrawerToggle();
                    navigateToSection("#home");
                  }}
                >
                  <ListItemText primary="Home" />
                </ListItem>
                <ListItem
                  button
                  onClick={async () => {
                    await handleDrawerToggle();
                    navigateToSection("#learn-more");
                  }}
                >
                  <ListItemText primary="Learn More" />
                </ListItem>
                <ListItem
                  button
                  onClick={async () => {
                    await handleDrawerToggle();
                    navigateToSection("#about");
                  }}
                >
                  <ListItemText primary="About" />
                </ListItem>
                <ListItem
                  button
                  onClick={async () => {
                    await handleDrawerToggle();
                    navigateToSection("#contact");
                  }}
                >
                  <ListItemText primary="Contact" />
                </ListItem>
                <ListItem>
                  <IconButton
                    onClick={() => {
                      colorMode.toggleColorMode();
                    }}
                    color="inherit"
                  >
                    {color === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
                  </IconButton>
                </ListItem>
              </List>
            </Drawer>
          </>
        )}
      </nav>

      <Typography
        marginTop={10}
        textAlign={"center"}
        variant="h2"
        align="center"
      >
        Study Daddy
      </Typography>
      <ElevationScroll>
        <HideOnScroll>
          <div id="back-to-top-anchor" />
        </HideOnScroll>
      </ElevationScroll>
      <Toolbar />
      <Box>
        <div id="home">
          <IntroducingCard />
        </div>
        <br /> <br /> <br />
        <div id="learn-more">
          <LernMoreCard />
        </div>
        <br /> <br /> <br />
        <div id="about">
          <About />
        </div>
        <br /> <br /> <br />
        <div id="contact">
          <Contact />
        </div>
      </Box>
      <ScrollTop
        window={typeof window !== "undefined" ? () => window : undefined}
      ></ScrollTop>
    </div>
  );
}
