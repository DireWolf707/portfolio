import React, { useState } from "react"
import { Navbar, About, Skills, Work, Sidebar, Experience, Contact } from "./components"
import { Stack } from "@mui/material"
import Wrapper from "./components/Wrapper"

const components = [
  { component: <About />, id: "about" },
  { component: <Work />, id: "work" },
  { component: <Skills />, id: "skills" },
  { component: <Experience />, id: "experience" },
  { component: <Contact />, id: "contact" },
]

const App = () => {
  const [open, setOpen] = useState(false)

  return (
    <Stack
      sx={{
        background: "rgba(0,0,75)",
        overflow: "hidden",
      }}
    >
      <Sidebar open={open} setOpen={setOpen} />

      <Navbar setOpen={setOpen} />

      {components.map(({ component, id }, idx) => (
        <Wrapper key={idx} id={id}>
          {component}
        </Wrapper>
      ))}
    </Stack>
  )
}

export default App
