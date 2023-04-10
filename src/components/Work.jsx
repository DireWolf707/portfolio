import React, { useState, useEffect } from "react"
import { Stack, Typography, Button, Paper, Box } from "@mui/material"
import { workTagsArray, workTags, projects } from "../utils/constants"

const Work = () => {
  const [selectedTag, setSelectedTag] = useState(workTags.all)
  const [filteredProjects, setFilteredProjects] = useState([])

  useEffect(() => {
    if (selectedTag === workTags.all) return setFilteredProjects([...projects])

    const _projects = [...projects].filter((project) => project.tags.includes(selectedTag))
    setFilteredProjects(_projects)
  }, [selectedTag])

  return (
    <Stack gap={4} px="34px">
      {/* Heading */}
      <Typography variant="h4" textAlign="center" fontWeight={600}>
        <span style={{ color: "#FF793E" }}>Portfolio</span> Section
      </Typography>
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
      <Stack flexWrap="wrap" flexDirection="row" justifyContent="center" alignItems="start" gap={2}>
        {filteredProjects.map((project, idx) => (
          <Paper key={idx} elevation={10} sx={{ p: "16px" }}>
            <Box component="img" src={project.image} height="280px" width="260px" sx={{ bgcolor: "#FF793E", borderRadius: "10px" }} />

            <Stack gap={0.5} width="220px" mx="auto">
              <Typography textAlign="center" fontWeight={600} color="#070A52">
                {project.name}
              </Typography>

              <Typography variant="subtitle2" textAlign="center" fontWeight={400} color="#070A52">
                {project.description}
              </Typography>
            </Stack>
          </Paper>
        ))}
      </Stack>
    </Stack>
  )
}

export default Work
