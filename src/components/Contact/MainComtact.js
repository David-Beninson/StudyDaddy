import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Contact from "./component/Contact";
import InptContact from "./component/InptContact";

const aboutContainerStyle = {
  maxWidth: "800px",
  margin: "0 auto",
  padding: "2rem",
  background: "#fff",
  borderRadius: "1rem",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom align="center">
        Tired of studying alone? We've got you covered!
      </Typography>
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Box>
            <Contact />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={aboutContainerStyle}>
            <InptContact />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
