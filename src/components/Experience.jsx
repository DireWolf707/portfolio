import React from "react"
import { Box, Link, Stack, Typography } from "@mui/material"
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import Heading from "./Heading"
import Wrapper from "./Wrapper"
import StarIcon from "@mui/icons-material/Star"
import { experiences, experienceMetadata } from "../utils/constants"

import "react-vertical-timeline-component/style.min.css"

const Experience = () => {
  return (
    <Stack gap={4}>
      {/* Heading */}
      <Heading title="Experience" />
      {/* TimeLine */}
      <VerticalTimeline>
        {experiences.map((experience, idx) => {
          const { icon: Icon, iconStyle, contentStyle, contentArrowStyle } = experienceMetadata[experience.type]

          return (
            <VerticalTimelineElement
              key={idx}
              contentStyle={contentStyle}
              contentArrowStyle={contentArrowStyle}
              iconStyle={iconStyle}
              icon={<Icon />}
              date={experience.date}
            >
              <Stack gap={2} sx={{ px: { xs: "14px", lg: "8px" } }}>
                <Typography fontFamily="Alkatra" variant="subtitle1" fontSize="26px">
                  {experience.title}
                </Typography>

                {experience.subTitle && (
                  <Typography fontFamily="Righteous" variant="subtitle2" fontSize="16px">
                    {experience.subTitle}
                  </Typography>
                )}

                <Box component="ul">
                  {experience.description.map((point, idx) => (
                    <Typography key={idx} component="li" fontFamily="Alkatra">
                      {point}
                    </Typography>
                  ))}
                </Box>

                {experience.link && (
                  <Link href={experience.link.href} underline="always" fontSize="16px" color="#fff">
                    {experience.link.name}
                  </Link>
                )}
              </Stack>
            </VerticalTimelineElement>
          )
        })}

        <VerticalTimelineElement iconStyle={{ background: "#FE633D" }} icon={<StarIcon />} />
      </VerticalTimeline>
    </Stack>
  )
}

export default Wrapper(Experience, "experience")
