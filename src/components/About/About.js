import React from "react";
import { Avatar, Grid, Link, Box, Typography } from "@mui/material";
import Icon from "../../images/Avatar.jpg";

const avatarStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginBottom: "1rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const aboutContainerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "1rem",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

const headingStyle = {
  fontSize: "36px",
  fontWeight: "bold",
  color: "#6200ea",
  marginBottom: "1rem",
};

const textStyle = {
  fontSize: "18px",
  marginBottom: "1rem",
};

const linkStyle = {
  color: "#6200ea",
  textDecoration: "none",
  display: "inline-block",
  marginBottom: "0.5rem",
  marginRight: "1rem",
};

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={9} sm={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              minHeight: "200px", // Set a minimum height to keep the Avatar centered
            }}
          >
            <Avatar alt="David Beninson" src={Icon} sx={avatarStyle} />
            <Link
              href="https://www.facebook.com/david.dav.5220"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Facebook
            </Link>
            <Link
              href="https://www.instagram.com/beninsondavid/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              Instagram
            </Link>
            <Link
              href="https://www.linkedin.com/in/david-beninson/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              LinkedIn
            </Link>
          </Box>
        </Grid>
        <Grid item xs={18} sm={9}>
          <Box sx={aboutContainerStyle}>
            <Typography variant="h4" sx={headingStyle}>
              Meet David Beninson
            </Typography>
            <Typography variant="body1" sx={textStyle}>
              A Full Stack Developer with a passion for technology and helping
              others. After serving as a paratroop commander in the IDF and
              working as a Restaurant Manager in Herzliya, I discovered my love
              for Full Stack Development. I honed my skills through the Harvard
              University online course and the SvCollege Full Stack Development
              program, and then spent 6 months as an Intern with Abilisense in
              Tel Aviv where I created a working app and a Sudoku game. I am an
              excellent team leader and team player, with experience in
              management, logistics, negotiation, counseling, and customer care.
              Now, I’m excited to use my skills to help people find study
              partners through my business.
            </Typography>
            <Link href="#contact" style={linkStyle}>
              Let's Connect
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
