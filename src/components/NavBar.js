import * as React from "react";
import About from "./About/About";
import IntroducingCard from "./CardsComponents/IntroducingCard";
import LernMoreCard from "./CardsComponents/LernMoreCard";
import Contact from "./Contact/Contact";
import HomeIcon from "@mui/icons-material/Home";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  Box,
  BottomNavigation,
  BottomNavigationAction,
  Button,
  Zoom,
} from "@mui/material";

export default function NavBar({ theme, colorMode, color }) {
  const [value, setValue] = React.useState("Home");
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [showPopup, setShowPopup] = React.useState(false);
  const [smallOrLarg, setSmallOrLarg] = React.useState(null);
  const [prevScreen, setPrevScreen] = React.useState(smallOrLarg);
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));

  React.useEffect(() => {
    isSmallScreen ? setSmallOrLarg("small") : setSmallOrLarg("larg");
    if (smallOrLarg !== prevScreen) {
      window.location.reload();
    }
  }, [isSmallScreen]);

  const handleChange = (event, newValue) => {
    setDrawerOpen(false);
    setValue(newValue);
  };

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <>
      {!isSmallScreen && (
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
      )}
      <Box>
        <Typography
          marginTop={10}
          textAlign={"center"}
          variant="h2"
          align="center"
        >
          Study Daddy
        </Typography>
        <Box
          sx={{
            display: { xs: "block", sm: "none" },
            position: "absolute",
            top: 0,
            right: 0,
          }}
        >
          <IconButton onClick={handleDrawerToggle}>
            <MenuIcon />
          </IconButton>
        </Box>

        {showPopup && (
          <>
            <div
              style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              }}
              onClick={() => {
                handlePopup();
              }}
            />
            <Zoom in={showPopup} timeout={1000}>
              <div
                style={{
                  position: "fixed",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Contact handlePopup={handlePopup} showPopup={showPopup} />
              </div>
            </Zoom>
          </>
        )}
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          PaperProps={{ style: { height: "auto" } }}
        >
          <List>
            <Box
              sx={{
                display: { xs: "block", sm: "none" },
                position: "absolute",
                top: 0,
                right: 0,
              }}
            >
              <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
              </IconButton>
            </Box>
            <ListItem
              button
              onClick={() => handleChange(null, "IntroducingCard")}
            >
              <ListItemText primary="Home" />
            </ListItem>
            <ListItem button onClick={() => handleChange(null, "LernMoreCard")}>
              <ListItemText primary="LernMoreCard" />
            </ListItem>
            <ListItem button onClick={() => handleChange(null, "About")}>
              <ListItemText primary="About" />
            </ListItem>
            <ListItem button onClick={() => handleChange(null, "Contact")}>
              <ListItemText primary="Contact" />
            </ListItem>
            <ListItem>
              <IconButton
                sx={{ ml: 1 }}
                onClick={() => {
                  colorMode.toggleColorMode();
                  setDrawerOpen(false);
                }}
                color="inherit"
              >
                {color === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
              </IconButton>
            </ListItem>
          </List>
        </Drawer>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          sx={{ display: { xs: "none", sm: "flex" } }}
        >
          <BottomNavigationAction
            label="Home"
            value="IntroducingCard"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            label="See More Card"
            value="LernMoreCard"
            icon={<FavoriteIcon />}
          />
          <BottomNavigationAction
            label="About"
            value="About"
            icon={<AccountCircleIcon />}
          />
          <Button
            onClick={() => {
              handlePopup();
            }}
          >
            <BottomNavigationAction
              label="Contact"
              value="Contact"
              icon={<ContactSupportIcon />}
            />
          </Button>
        </BottomNavigation>
        {value === "Home" && <IntroducingCard />}
        {value === "About" && <About />}
        {value === "IntroducingCard" && <IntroducingCard />}
        {value === "LernMoreCard" && <LernMoreCard />}
        {value === "Contact" && <Contact showPopup={true} />}
      </Box>
    </>
  );
}
