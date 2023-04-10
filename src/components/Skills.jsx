import React from "react"
import { Stack, Typography, Box, Tooltip } from "@mui/material"
import { skills } from "../utils/constants"
import Wrapper from "./Wrapper"

const Skills = () => {
  return (
    <Stack gap={4} px="34px">
      {/* Heading */}
      <Typography variant="h4" textAlign="center" fontWeight={600}>
        <span style={{ color: "#FF793E" }}>Skills</span> Section
      </Typography>
      {/* Skills */}
      <Stack justifyContent="center" gap={4} sx={{ flexDirection: { xs: "column", lg: "row" } }}>
        {skills.map((skill, idx) => (
          <Stack key={idx} gap={2} alignItems="center">
            <Typography color="#F0CAA3" variant="h6">
              {skill.name}
            </Typography>

            <Stack flexWrap="wrap" justifyContent="center" gap={1.5} sx={{ flexDirection: { xs: "row", lg: "column" } }}>
              {skill.techs.map((tech, idx) => (
                <Tooltip key={idx} title={tech.name} arrow>
                  <Box
                    component="img"
                    src={tech.image}
                    alt={tech.name}
                    height="80px"
                    width="80px"
                    sx={{ bgcolor: "white", borderRadius: "100%", p: "4px" }}
                  />
                </Tooltip>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Wrapper(Skills, "skills")
