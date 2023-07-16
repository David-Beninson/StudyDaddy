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
              <Typography variant="h6">
                Tired of studying alone? We've got you covered!
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
                <CardContent>
                  <div>
                    <Typography variant="body1">
                      {<EmailIcon />}Send me an email:
                    </Typography>
                    <Link
                      href="mailto:beninsondavid@gmail.com"
                      style={{
                        marginRight: "0.5rem",
                        textDecoration: "none",
                      }}
                    >
                      beninsondavid@gmail.com
                    </Link>
                  </div>
                  <div>
                    <Typography variant="body1">
                      {<WhatsAppIcon />} Reach out on WhatsApp:
                    </Typography>
                    <Link
                      href="https://wa.me/+972536216125"
                      style={{
                        marginRight: "0.5rem",
                        textDecoration: "none",
                      }}
                    >
                      053-621-6125
                    </Link>
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
