import React from "react"
import { Box, Stack } from "@mui/material"
import { navHeight } from "../utils/constants"

const Wrapper = (Children, id) => () => {
  return (
    <>
      <Box height={navHeight} id={id} mb="10px" />
      <Stack minHeight="87.5vh" px="34px">
        <Children />
      </Stack>
    </>
  )
}

export default Wrapper
