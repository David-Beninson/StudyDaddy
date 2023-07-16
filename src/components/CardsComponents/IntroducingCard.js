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
                  variant="h4"
                  style={{
                    marginBottom: "1rem",
                    height: isSmallScreen ? 80 : 100,
                    fontSize: isSmallScreen ? "1.5rem" : "2.125rem",
                  }}
                  align="center"
                >
                  Introducing Study Daddy:
                  <br />
                  📚 Your Virtual Study Partner! 🎉
                </Typography>
                <Typography variant="body1">
                  Do you often find yourself studying alone? Wish you had
                  someone to discuss concepts, review notes, and stay motivated
                  with? Need a dedicated study partner who understands your
                  challenges?
                </Typography>
              </>
            ) : (
              <Card style={{ maxWidth: 400 }}>
                <CardContent>
                  <Typography
                    variant="h4"
                    style={{ marginBottom: "1rem" }}
                    align="center"
                  >
                    Introducing Study Daddy:
                    <br />
                    📚 Your Virtual Study Partner! 🎉
                  </Typography>
                  <Typography variant="body1">
                    Do you often find yourself studying alone? Wish you had
                    someone to discuss concepts, review notes, and stay
                    motivated with? Need a dedicated study partner who
                    understands your challenges?
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
