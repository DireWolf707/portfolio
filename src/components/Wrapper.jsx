import React from "react"
import { Box, Stack } from "@mui/material"
import { navHeight } from "../utils/constants"

const Wrapper = (Children, id) => () => {
  return (
    <Stack minHeight="100vh" px="34px">
      <Box height={navHeight} id={id} mb="10px" />
      <Children />
    </Stack>
  )
}

export default Wrapper
