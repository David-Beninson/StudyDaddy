import * as React from "react";
import { Card, CardContent, Link, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

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

export default function Contact() {
  return (
    <Card sx={cardStyle}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          !נמאס לכם ללמוד לבד? יש לנו את הפתרון המושלם בשבילך
        </Typography>
        <div>
          <Typography variant="body1" sx={textStyle}>
            <EmailIcon sx={iconStyle} />
            :מייל
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
            :וואטסאפ
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
  );
}
