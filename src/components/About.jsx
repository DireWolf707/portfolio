import React, { useRef, useEffect } from "react"
import { Stack, Box, Typography, Link, Button } from "@mui/material"
import { motion } from "framer-motion"
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined"
import Typed from "typed.js"
import Wrapper from "./Wrapper"
import { wolfAnimation, translateLeft, translateRight } from "../utils/animations"

const About = () => {
  const textRef = useRef(null)

  useEffect(() => {
    const typed = new Typed(textRef.current, {
      strings: ["Backend Developer", "Frontend Developer", "Database Developer", "Blockchain Developer"],
      typeSpeed: 40,
      loop: true,
      backSpeed: 40,
      backDelay: 1500,
    })

    return () => typed.destroy()
  }, [])

  return (
    <Stack flexGrow={1} justifyContent="center" alignItems="center" gap={4} sx={{ flexDirection: { sm: "column", md: "row" } }}>
      {/* Details */}
      <Stack gap={3} sx={{ width: { xs: "320px", sm: "520px" } }}>
        {/* Welcome Bar */}
        <Stack gap={2} sx={{ flexDirection: { xs: "column", sm: "row" } }}>
          <Typography component={motion.div} animate={translateRight} textAlign="center" variant="subtitle2" bgcolor="#FF793E" p="8px">
            Welcome to my Portfolio
          </Typography>

          <Button component={motion.div} animate={translateLeft} href="/assets/CV.pdf" target="_blank" variant="outlined" color="btn1">
            Download CV
          </Button>
        </Stack>
        {/* Intro */}
        <Typography variant="h2" fontWeight={600} color="#FF793E" sx={{ height: { xs: "270px", sm: "200px" } }}>
          Hi! I'm Rahul <span ref={textRef} />
        </Typography>
        {/* Bio */}
        <Typography component={motion.div} animate={translateRight} fontFamily="Righteous" fontSize="19px" color="#D2EFFF">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, officiis quas? Quis, voluptatibus sed repellat consequuntur
          asperiores ea exercitationem ipsum magni rerum culpa, voluptates temporibus saepe deserunt! Atque, minima voluptatem.
        </Typography>
        {/* Connect Link */}
        <Link href="#contact" underline="none">
          <Stack component={motion.div} animate={translateLeft} flexDirection="row" alignItems="center" gap={0.8}>
            <Typography fontWeight={600} color="#FF793E">
              Let's Connect
            </Typography>
            <ArrowCircleRightOutlinedIcon sx={{ fill: "#FF793E" }} />
          </Stack>
        </Link>
      </Stack>
      {/* Wolf Image */}
      <Box component={motion.div} animate={wolfAnimation}>
        <Box component="img" src="/about/wolf-howl.png" height="460px" width="460px" />
      </Box>
    </Stack>
  )
}

export default Wrapper(About, "about")
