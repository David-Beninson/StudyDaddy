import { createRoot } from "react-dom/client";
import { createTheme, ThemeProvider } from "@mui/material";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const theme = createTheme(
  {
    palette: {
      primary: { main: "#1976d2" },
    },
  },
  "he-IL"
);

const container = document.getElementById("root");

createRoot(container).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);

reportWebVitals();
