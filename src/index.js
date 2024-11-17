import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" },
    secondary: { main: "#dc004e" },
  },
  typography: {
    h4: { fontSize: "2rem", "@media (max-width:600px)": { fontSize: "1.5rem" } },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById("root")
);
