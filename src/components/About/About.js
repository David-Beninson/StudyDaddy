import React from "react";
import { Grid, Box, Typography } from "@mui/material";

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
  color: "black",
  marginBottom: "1rem",
};

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3} justifyContent="center">
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
            program, and then spent 6 months as an Intern with Abilisense in Tel
            Aviv where I created a working app and a Sudoku game. I am an
            excellent team leader and team player, with experience in
            management, logistics, negotiation, counseling, and customer care.
            Now, I’m excited to use my skills to help people find study partners
            through my business.
          </Typography>
        </Box>
      </Grid>
    </Box>
  );
}
