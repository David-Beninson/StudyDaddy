import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import Contact from "./component/ContactHe";
import InptContact from "./component/InptContactHe";

const aboutContainerStyle = {
  background: "#fff",
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  color: "black",
  maxHeight: "500px",
  minHeight: "500px",
};

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Typography variant="h5" gutterBottom align="center">
        !נמאס לכם ללמוד לבד? יש לנו את הפתרון המושלם בשבילך
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Box sx={aboutContainerStyle}>
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
