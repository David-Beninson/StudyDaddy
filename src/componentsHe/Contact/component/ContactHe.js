import * as React from "react";
import {
  Avatar,
  Link,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import Icon from "../../../images/Avatar.jpg";

const iconStyle = {
  fontSize: "48px",
  marginBottom: "1rem",
  color: "#6200ea",
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
            <>
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
                  פייסבוק
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
              <CardContent>
                <div>
                  <Typography variant="body1" sx={textStyle}>
                    <EmailIcon sx={iconStyle} />
                    :מייל
                    <br />
                    <Link
                      href="mailto:beninsondavid@gmail.com"
                      style={{ textDecoration: "none", color: "#6200ea" }}
                    >
                      beninsondavid@gmail.com
                    </Link>
                  </Typography>
                </div>
                <div>
                  <Typography variant="body1" sx={textStyle}>
                    <WhatsAppIcon sx={iconStyle} />
                    :וואטסאפ
                    <br />
                    <Link
                      href="https://wa.me/+972536216125"
                      style={{ textDecoration: "none", color: "#6200ea" }}
                    >
                      053-621-6125
                    </Link>
                  </Typography>
                </div>
              </CardContent>
            </>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
