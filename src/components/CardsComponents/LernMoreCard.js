import React from "react";
import { Typography, Card, CardContent, Zoom } from "@mui/material";

export default function LernMoreCard() {
  return (
    <Zoom in={true} timeout={1000}>
      <div>
        <Card
          variant="outlined"
          style={{
            backgroundColor: "rgb(246, 195, 101)",
            color: "white",
            padding: "2rem",
            borderRadius: "1rem",
            marginTop: "2rem",
          }}
        >
          <CardContent>
            <Typography variant="h5" style={{ marginBottom: "1rem" }}>
              Let's Supercharge Your Study Experience! 🚀
            </Typography>
            <Typography variant="body1" align="center">
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
