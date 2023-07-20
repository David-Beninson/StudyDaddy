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
  color: "black",
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
              פייסבוק
            </Link>
            <Link
              href="https://www.instagram.com/beninsondavid/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              אינסטגרם
            </Link>
            <Link
              href="https://www.linkedin.com/in/david-beninson/"
              target="_blank"
              rel="noopener noreferrer"
              style={linkStyle}
            >
              ליקדאין
            </Link>
          </Box>
        </Grid>
        <Grid item xs={18} sm={9}>
          <Box sx={aboutContainerStyle}>
            <Typography variant="h4" sx={headingStyle}>
              הכירו את דוד בנינסון
            </Typography>
            <Typography variant="body1" sx={textStyle}>
              היי, אני דיוויד בנינסון, מפתח Full Stack עם תשוקה ל טכנולוגיה
              ועזרה לאחרים. לאחר שירות בצנחנים מפקד בצה"ל ועובד כמנהל מסעדה ב
              הרצליה, גיליתי את אהבתי ל-Full Stack Development. חידדתי הכישורים
              שלי דרך הקורס המקוון של אוניברסיטת הרווארד וה SvCollege Full Stack
              Development תוכנית, ולאחר מכן בילה 6 חודשים כמו מתמחה באביליסנס
              בתל אביב שם יצרתי אפליקציה עובדת ומשחק סודוקו. אני מנהיג צוות
              ושחקן צוות מעולה, עם ניסיון בניהול, לוגיסטיקה, משא ומתן, ייעוץ,
              וטיפול בלקוחות. עכשיו, אני נרגש להשתמש בכישורים שלי כדי לעזור
              לאנשים למצוא שותפים ללימודים דרך העסק שלי.
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
