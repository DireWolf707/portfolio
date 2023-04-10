import React from "react"
import { Typography } from "@mui/material"

const Heading = ({ title }) => {
  return (
    <Typography fontFamily="Sedgwick Ave Display" fontSize="45px" textAlign="center">
      <span style={{ color: "#FF793E" }}>{title}</span> Section
    </Typography>
  )
}

export default Heading
