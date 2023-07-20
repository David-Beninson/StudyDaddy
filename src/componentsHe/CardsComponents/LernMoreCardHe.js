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
              בואו להטעין את חווית הלימוד שלך! 🚀
            </Typography>
            <Typography variant="body1">
              עם Study Daddy, תקבלו מפגשי לימוד מותאמים אישית לצרכים ולהעדפות
              שלך. אנחנו ניצור תוכנית לימודים ש מתאים לסגנון הלמידה שלך, ממפגשי
              סיעור מוחות ועד לבחינה הכנה. אנחנו נשאיר אותך אחראי, ממוקד
              ומוטיבציה הדרך למצוינות אקדמית. בחר את המחקר המועדף עליך אפשרויות,
              בין אם זה מפגשי לימוד וירטואליים או מפגשים אצלכם בית קפה מקומי
              אהוב. אל תיתן ללימוד לבד לעכב אותך. לְהִצְטַרֵף למד את אבא היום
              ותחווה את הכוח של שיתוף פעולה לְמִידָה!
            </Typography>
          </CardContent>
        </Card>
      </div>
    </Zoom>
  );
}
