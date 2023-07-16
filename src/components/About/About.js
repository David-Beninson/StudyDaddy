import React from "react";
import { Avatar, Grid, Link, Box } from "@mui/material";
import Icon from "../../images/logo192.JPG";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt="David Beninson"
              src={Icon}
              sx={{ width: 100, height: 100 }}
            />
            <Link href="https://www.facebook.com/david.dav.5220">Facebook</Link>
            <Link href="https://www.instagram.com/beninsondavid/">
              Instagram
            </Link>
            <Link href="https://www.linkedin.com/in/david-beninson/">
              LinkedIn
            </Link>
          </Box>
        </Grid>
        <Grid item xs={9}>
          <Box
            sx={{
              borderLeft: "1px solid #e0e0e0",
              paddingLeft: "16px",
            }}
          >
            Hi, I’m David Beninson, a Full Stack Developer with a passion for
            technology and helping others. After serving as a paratroop
            commander in the IDF and working as a Restaurant Manager in
            Herzliya, I discovered my love for Full Stack Development. I honed
            my skills through the Harvard University online course and the
            SvCollege Full Stack Development program, and then spent 6 months as
            an Intern with Abilisense in Tel Aviv where I created a working app
            and a Sudoku game. I am an excellent team leader and team player,
            with experience in management, logistics, negotiation, counseling,
            and customer care. Now, I’m excited to use my skills to help people
            find study partners through my business.
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
