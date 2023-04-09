import React from "react"
import { Stack, Typography } from "@mui/material"

const Experience = () => {
  return (
    <Stack minHeight="100vh" gap={4} px="34px">
      {/* Heading */}
      <Typography variant="h4" textAlign="center" fontWeight={600}>
        <span style={{ color: "#FF793E" }}>Experience</span> Section
      </Typography>
    </Stack>
  )
}

export default Experience
