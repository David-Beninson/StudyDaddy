import React from "react";
import { Typography, Card, CardContent, Zoom, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const cardStyle = {
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)", // Gradient background
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  color: "#fff", // White text color
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow
};

export default function IntroducingCard() {
  const theme = useTheme();

  return (
    <Zoom in={true} timeout={1000}>
      <div>
        <Grid container justifyContent="center">
          <Card sx={cardStyle}>
            <CardContent>
              <Typography variant="h4" gutterBottom>
                הכירו את Study Daddy:
              </Typography>
              <Typography variant="h6" gutterBottom>
                📚 השותף הוורטואלי שלך ללימודים! 🎉
              </Typography>
              <Typography variant="body1">
                האם אתם מוצאים את עצמכם לומדים לעתים קרובות לבד? הלוואי שהיה לך
                מישהו לדון במושגים, לסקור הערות ולהישאר עם מוטיבציה? צריך שותף
                לימודים מסור שמבין את האתגרים שלכם?
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </div>
    </Zoom>
  );
}
