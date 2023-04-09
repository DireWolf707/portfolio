import React, { useState } from "react"
import { Navbar, About, Skills, Work, Sidebar, Experience, Contact } from "./components"
import { Stack } from "@mui/material"

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack
      sx={{
        background: "linear-gradient(180deg, rgba(0,0,8,1) 0%, rgba(0,0,148,1) 100%)",
        overflow: "hidden",
      }}
    >
      <Sidebar open={open} setOpen={setOpen} />
      <Navbar setOpen={setOpen} />
      <About />
      <Work />
      <Skills />
      <Experience />
      <Contact />
    </Stack>
  )
}

export default App
