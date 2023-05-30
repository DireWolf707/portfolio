import { useState, useEffect } from "react"
import { Stack, Typography, Button, Paper, Box } from "@mui/material"
import { workTagsArray, workTags, projects } from "../utils/constants"
import { motion, AnimatePresence } from "framer-motion"
import { cardAnimationVariant, whileInViewConstants } from "../utils/animations"
import Heading from "./Heading"
import Wrapper from "./Wrapper"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const Work = () => {
  const [selectedTag, setSelectedTag] = useState(workTags.all)
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    if (selectedTag === workTags.all) return setFilteredProjects([...projects])

    const _projects = [...projects].filter((project) => project.tags.includes(selectedTag))
    setFilteredProjects(_projects)
  }, [selectedTag])

  return (
    <Stack gap={4}>
      {/* Heading */}
      <Heading title="Work" />
      {/* Tag button group */}
      <Stack flexWrap="wrap" flexDirection="row" justifyContent="center" gap={1.5}>
        {workTagsArray.map((tag, idx) => (
          <Button
            key={idx}
            onClick={() => setSelectedTag(tag)}
            variant="contained"
            size="small"
            color={selectedTag === tag ? "error" : "btn2"}
          >
            {tag}
          </Button>
        ))}
      </Stack>
      {/* Projects */}
      <Stack flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="start" gap={3}>
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <Stack
              key={project.title} // unique key!
              component={motion.div}
              layout
              variants={cardAnimationVariant}
              {...whileInViewConstants}
              alignItems="center"
              gap={1.2}
              bgcolor="#fff"
              borderRadius="12px"
              px="12px"
              pt="12px"
              pb="18px"
            >
              <Box
                component="img"
                src={project.image}
                height={{ xs: "100%", sm: "300px" }}
                width={{ xs: "100%", sm: "400px" }}
                sx={{ borderRadius: "10px", border: "3px solid #070A52" }}
              />

              <Stack flexDirection="row" gap={0.5} justifyContent="center" alignItems="center">
                <Typography fontSize="18px" fontWeight={600} fontFamily="Righteous" color="#070A52">
                  {project.title}
                </Typography>

                <Stack component="a" href={project.deployedLink} target="_blank">
                  <OpenInNewIcon sx={{ fontSize: "18px", fill: "#000" }} />
                </Stack>
              </Stack>

              <Stack flexDirection="row">
                <Typography fontSize="16px" fontWeight={500} fontFamily="Alkatra" color="#070A52">
                  Full fledged
                </Typography>
                &nbsp;
                <Typography fontSize="16px" fontWeight={600} fontFamily="Alkatra" color="#070A52">
                  {project.subTitle}
                </Typography>
                &nbsp;
                <Typography fontSize="16px" fontWeight={500} fontFamily="Alkatra" color="#070A52">
                  application
                </Typography>
              </Stack>

              <Box component="ul" maxWidth="60%">
                {project.description.map((point, idx) => (
                  <Typography key={idx} component="li" fontSize="14px" fontFamily="Righteous" color="#070A52">
                    {point}
                  </Typography>
                ))}
              </Box>
            </Stack>
          ))}
        </AnimatePresence>
      </Stack>
    </Stack>
  )
}

export default Wrapper(Work, "work")
