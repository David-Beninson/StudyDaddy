import React from "react";
import {
  Typography,
  Card,
  CardContent,
  Zoom,
  Grid,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function IntroducingCard() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <>
      <Grid container justifyContent="center" alignItems="center">
        <Zoom in={true} timeout={1000}>
          <div>
            {isSmallScreen ? (
              <>
                <Typography
                  dir="rtl"
                  variant="h4"
                  style={{
                    marginBottom: "1rem",
                    height: isSmallScreen ? 80 : 100,
                    fontSize: isSmallScreen ? "1.5rem" : "2.125rem",
                  }}
                >
                  הכירו את Study Daddy:
                  <br />
                  📚 השותף הוורטואלי שלך ללימודים! 🎉
                </Typography>
                <Typography dir="rtl" variant="body1">
                  האם אתם מוצאים את עצמכם לומדים לעתים קרובות לבד? הלוואי שהיה
                  לך מישהו לדון במושגים, לסקור הערות ולהישאר עם מוטיבציה? צריך
                  שותף לימודים מסור שמבין את האתגרים שלכם?
                </Typography>
              </>
            ) : (
              <Card dir="rtl" style={{ maxWidth: 400 }}>
                <CardContent>
                  <Typography
                    dir="rtl"
                    variant="h4"
                    style={{ marginBottom: "1rem" }}
                  >
                    הכירו את Study Daddy:
                    <br />
                    📚 השותף הוורטואלי שלך ללימודים! 🎉
                  </Typography>
                  <Typography dir="rtl" variant="body1">
                    האם אתם מוצאים את עצמכם לומדים לעתים קרובות לבד? הלוואי שהיה
                    לך מישהו לדון במושגים, לסקור הערות ולהישאר עם מוטיבציה? צריך
                    שותף לימודים מסור שמבין את האתגרים שלכם?
                  </Typography>
                </CardContent>
              </Card>
            )}
          </div>
        </Zoom>
      </Grid>
    </>
  );
}
