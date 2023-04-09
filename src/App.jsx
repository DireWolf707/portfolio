import React, { useState } from "react"
import { Navbar, About, Skills, Work, Sidebar } from "./components"
import { Stack } from "@mui/material"

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack
      sx={{
        background: "linear-gradient(135deg, rgba(0,0,0,1) 0%, rgba(0,0,149,1) 50%, rgba(0,129,255,1) 100%)",
        overflow: "hidden",
      }}
    >
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar setOpen={setOpen} />
      <About />
      <Work />
      <Skills />
    </Stack>
  )
}

export default App
