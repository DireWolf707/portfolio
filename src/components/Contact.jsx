import React from "react"
import { Stack, Typography } from "@mui/material"
import Heading from "./Heading"
import Wrapper from "./Wrapper"

const Contact = () => {
  return (
    <Stack gap={4} px="34px">
      {/* Heading */}
      <Heading title="Contact" />
    </Stack>
  )
}

export default Wrapper(Contact, "contact")
