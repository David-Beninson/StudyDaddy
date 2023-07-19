import React from "react";
import { Typography, Card, CardContent, Zoom } from "@mui/material";

const cardStyle = {
  background: "#f0f0f0", // Light gray background
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  textAlign: "center",
  color: "black",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow
};

export default function LernMoreCard() {
  return (
    <Zoom in={true} timeout={1000}>
      <div>
        <Card sx={cardStyle}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Let's Supercharge Your Study Experience! 🚀
            </Typography>
            <Typography variant="body1">
              With Study Daddy, you'll get personalized study sessions tailored
              to your needs and preferences. We'll create a study plan that
              suits your learning style, from brainstorming sessions to exam
              preparation. We'll keep you accountable, focused, and motivated on
              the road to academic excellence. Choose your preferred study
              options, whether it's virtual study sessions or meet-ups at your
              favorite local cafe. Don't let studying alone hold you back. Join
              Study Daddy today and experience the power of collaborative
              learning!
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Zoom>
  );
}
