import * as React from "react";
import {
  Avatar,
  Link,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Icon from "../../../images/Avatar.jpg";
const cardStyle = {
  background: "#fff",
  borderRadius: "1rem",
  padding: "2rem",
  marginBottom: "2rem",
  textAlign: "center",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  color: "black",
};

const iconStyle = {
  fontSize: "48px",
  marginBottom: "1rem",
  color: "#6200ea", // Purple color for icons
};

const textStyle = {
  marginBottom: "1rem",
};
const linkStyle = {
  color: "#6200ea",
  textDecoration: "none",
  display: "inline-block",
  marginBottom: "0.5rem",
  marginRight: "1rem",
};
const avatarStyle = {
  width: "150px",
  height: "150px",
  borderRadius: "50%",
  marginBottom: "1rem",
  boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
};
export default function Contact() {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid justifyContent="center">
          <Grid>
            <Card sx={cardStyle}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "200px",
                }}
              >
                <Avatar alt="David Beninson" src={Icon} sx={avatarStyle} />
                <Link
                  href="https://www.facebook.com/david.dav.5220"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  Facebook
                </Link>
                <Link
                  href="https://www.linkedin.com/in/david-beninson/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={linkStyle}
                >
                  LinkedIn
                </Link>
              </Box>
              <CardContent>
                <div>
                  <Typography variant="body1" sx={textStyle}>
                    <EmailIcon sx={iconStyle} />
                    Send me an email:
                  </Typography>
                  <Link
                    href="mailto:beninsondavid@gmail.com"
                    style={{ textDecoration: "none", color: "#6200ea" }}
                  >
                    beninsondavid@gmail.com
                  </Link>
                </div>
                <div>
                  <Typography variant="body1" sx={textStyle}>
                    <WhatsAppIcon sx={iconStyle} />
                    Reach out on WhatsApp:
                  </Typography>
                  <Link
                    href="https://wa.me/+972536216125"
                    style={{ textDecoration: "none", color: "#6200ea" }}
                  >
                    053-621-6125
                  </Link>
                </div>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
