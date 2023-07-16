import React from "react";
import { Avatar, Grid, Link, Box } from "@mui/material";
import Icon from "../../images/logo192.JPG";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Box
            dir="rtl"
            sx={{
              borderRight: "1px solid #e0e0e0",
              paddingLeft: "16px",
            }}
          >
            היי, אני דיוויד בנינסון, מפתח Full Stack עם תשוקה ל טכנולוגיה ועזרה
            לאחרים. לאחר שירות בצנחנים מפקד בצה"ל ועובד כמנהל מסעדה ב הרצליה,
            גיליתי את אהבתי ל-Full Stack Development. חידדתי הכישורים שלי דרך
            הקורס המקוון של אוניברסיטת הרווארד וה SvCollege Full Stack
            Development תוכנית, ולאחר מכן בילה 6 חודשים כמו מתמחה באביליסנס בתל
            אביב שם יצרתי אפליקציה עובדת ומשחק סודוקו. אני מנהיג צוות ושחקן צוות
            מעולה, עם ניסיון בניהול, לוגיסטיקה, משא ומתן, ייעוץ, וטיפול בלקוחות.
            עכשיו, אני נרגש להשתמש בכישורים שלי כדי לעזור לאנשים למצוא שותפים
            ללימודים דרך העסק שלי.
          </Box>
        </Grid>
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
            <Link href="https://www.facebook.com/david.dav.5220">פייסבוק</Link>
            <Link href="https://www.instagram.com/beninsondavid/">
              אינסטגרם
            </Link>
            <Link href="https://www.linkedin.com/in/david-beninson/">
              ליקדאין
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
