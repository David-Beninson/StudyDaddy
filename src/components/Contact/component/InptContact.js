import React, { useRef, useState, useEffect } from "react";
import { Container, TextField, Button, Alert, Slide } from "@mui/material";
import "animate.css";
import emailjs from "emailjs-com";
import SendIcon from "@mui/icons-material/Send";

const InptContact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const form = useRef();

  useEffect(() => {
    let timeout;
    if (status.message) {
      timeout = setTimeout(() => {
        setStatus({});
      }, 1500);
    }
    return () => clearTimeout(timeout);
  }, [status.message]);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        `service_nfxdgzo`,
        `template_bb4ymsl`,
        form.current,
        `60MGK1y9GQ_0dBIAY`
      )
      .then(
        (result) => {
          setButtonText("Send");
          setStatus({
            severity: "success",
            message: "Message sent successfully",
          });
          console.log(result.text);
        },
        (error) => {
          setStatus({
            severity: "error",
            message: "Something went wrong, please try again later.",
          });
          console.log(error.text);
          setButtonText("Send");
        }
      );
  };

  return (
    <>
      <section
        style={{
          paddingTop: "24px",
          paddingBottom: "24px",
        }}
        id="connect"
      >
        <Container>
          <div className="animate__animated animate__fadeIn">
            <form
              ref={form}
              onSubmit={sendEmail}
              style={{
                marginTop: "16px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "500px",
              }}
            >
              <TextField
                style={{ marginBottom: "16px" }}
                variant="outlined"
                name="first_name"
                label="First Name"
                required
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <TextField
                style={{ marginBottom: "16px" }}
                variant="outlined"
                name="last_name"
                label="Last Name"
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <TextField
                style={{ marginBottom: "16px" }}
                variant="outlined"
                name="user_email"
                label="Email Address"
                required
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <TextField
                style={{ marginBottom: "16px" }}
                variant="outlined"
                name="phone_number"
                label="Phone No."
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <TextField
                id="outlined-multiline-flexible"
                label="Message"
                multiline
                maxRows={2}
                minRows={2}
                fullWidth
                InputLabelProps={{ style: { color: "gray" } }}
              />
              <Button
                style={{
                  marginTop: "16px",
                  backgroundColor: "#1976d2",
                  color: "#ffffff",
                }}
                variant="contained"
                type="submit"
                startIcon={<SendIcon />}
                disabled={buttonText === "Sending..."}
              >
                {buttonText}
              </Button>
            </form>
          </div>
        </Container>
      </section>{" "}
      <Slide direction="left" in={status.message !== undefined}>
        <div
          style={{
            marginTop: "16px",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          {status.message && (
            <Alert severity={status.severity}>{status.message}</Alert>
          )}
        </div>
      </Slide>
    </>
  );
};

export default InptContact;
