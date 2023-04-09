import React from "react"
import { Box } from "@mui/material"
import { navHeight } from "../utils/constants"

const Wrapper = ({ children, id }) => {
  return (
    <>
      <Box height={navHeight} id={id} />
      {children}
    </>
  )
}

export default Wrapper
