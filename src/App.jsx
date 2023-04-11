import React, { useState } from "react"
import { Navbar, Sidebar, About, Work, Skills, Experience, Contact } from "./components"
import { Stack } from "@mui/material"

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack bgcolor="rgb(0,0,75)" overflow="hidden">
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
