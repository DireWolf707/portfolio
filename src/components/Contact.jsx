import React from "react"
import { Stack, Typography } from "@mui/material"

const Contact = () => {
  return (
    <Stack gap={4} px="34px">
      {/* Heading */}
      <Typography variant="h4" textAlign="center" fontWeight={600}>
        <span style={{ color: "#FF793E" }}>Contact</span> Section
      </Typography>
    </Stack>
  )
}

export default Contact
