import React from "react"
import { Stack, Typography, Box, Tooltip } from "@mui/material"
import { motion } from "framer-motion"
import { skills } from "../utils/constants"
import { blurOutVariant } from "../utils/animations"
import Heading from "./Heading"
import Wrapper from "./Wrapper"

const Skills = () => {
  return (
    <Stack gap={4}>
      {/* Heading */}
      <Heading title="Skills" />
      {/* Skills */}
      <Stack justifyContent="center" gap={4} sx={{ flexDirection: { xs: "column", lg: "row" } }}>
        {skills.map((skill, idx) => (
          <Stack key={idx} gap={2} alignItems="center">
            <Typography fontFamily="Righteous" fontSize="22px" color="#D2EFFF">
              {skill.name}
            </Typography>
            {/* Technologies */}
            <Stack flexWrap="wrap" justifyContent="center" gap={1.5} sx={{ flexDirection: { xs: "row", lg: "column" } }}>
              {skill.techs.map((tech, idx) => (
                <Box component={motion.div} variants={blurOutVariant} initial="initial" whileInView="animate" viewport={{ once: true }}>
                  <Tooltip key={idx} title={tech.name} arrow>
                    <Box
                      component="img"
                      src={tech.image}
                      alt={tech.name}
                      height="80px"
                      width="80px"
                      sx={{ bgcolor: "white", border: "4px solid rgba(0,0,0,0.7)", borderRadius: "100%", p: "4px" }}
                    />
                  </Tooltip>
                </Box>
              ))}
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Wrapper(Skills, "skills")
