import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createTheme, ThemeProvider } from "@mui/material"
import { red, blue } from "@mui/material/colors"
import "./index.css"

const theme = createTheme({
  palette: {
    my: {
      dark: blue[50],
      main: "white",
      contrastText: red[400],
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
