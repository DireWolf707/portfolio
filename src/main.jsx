import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { createTheme, ThemeProvider } from "@mui/material"
import { red, blue } from "@mui/material/colors"
import "./index.css"

const theme = createTheme({
  palette: {
    btn1: {
      main: blue[300],
    },
    btn2: {
      main: "#fff",
      dark: red[50],
      contrastText: red[400],
    },
  },
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
)
