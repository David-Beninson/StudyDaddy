import React from "react";
import { Typography, Card, CardContent, Zoom } from "@mui/material";

export default function LernMoreCard() {
  return (
    <Zoom in={true} timeout={1000}>
      <div>
        <Card
          variant="outlined"
          style={{
            padding: "2rem",
            borderRadius: "1rem",
            marginTop: "2rem",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h5" style={{ marginBottom: "1rem" }}>
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
