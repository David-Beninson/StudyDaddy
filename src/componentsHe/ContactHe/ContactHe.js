import * as React from "react";
import {
  Card,
  CardContent,
  IconButton,
  Link,
  Popper,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const PopupDiv = ({ handlePopup, showPopup }) => {
  const muiTheme = useTheme();
  const isSmallScreen = useMediaQuery(muiTheme.breakpoints.down("sm"));
  return (
    <>
      <Popper
        open={showPopup}
        style={{
          position: "fixed",
          zIndex: 9999,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <Card elevation={3}>
          {!isSmallScreen && (
            <Typography variant="h6" align="right">
              <div>
                <IconButton
                  edge="end"
                  color="inherit"
                  aria-label="close"
                  onClick={() => {
                    handlePopup();
                  }}
                  style={{ marginLeft: "auto" }}
                >
                  <CloseIcon />
                </IconButton>
              </div>
            </Typography>
          )}
          <Typography>
            <div>
              <Typography variant="h6" style={{ textAlign: "left" }}>
                !נמאס לכם ללמוד לבד? יש לנו את הפתרון המושלם בשבילך
              </Typography>
              <Card
                variant="outlined"
                style={{
                  backgroundColor: "rgb(189, 90, 189)",
                  color: "white",
                  padding: "2rem",
                  borderRadius: "1rem",
                  marginBottom: "2rem",
                }}
              >
                <CardContent dir="ltr">
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                      href="mailto:beninsondavid@gmail.com"
                      style={{
                        marginLeft: "0.5rem",
                        textDecoration: "none",
                      }}
                    >
                      beninsondavid@gmail.com
                    </Link>{" "}
                    <Typography
                      variant="body1"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      לשליחת מייל: <EmailIcon />
                    </Typography>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Link
                      href="https://wa.me/+972536216125"
                      style={{
                        marginLeft: "0.5rem",
                        textDecoration: "none",
                      }}
                    >
                      053-621-6125
                    </Link>
                    <Typography
                      variant="body1"
                      style={{ marginLeft: "0.5rem" }}
                    >
                      :WhatsApp לשיחת <WhatsAppIcon />
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </Typography>
        </Card>
      </Popper>
    </>
  );
};

export default PopupDiv;
