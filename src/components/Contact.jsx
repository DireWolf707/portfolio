import React from "react"
import { Stack, Typography, Box, Link } from "@mui/material"
import Heading from "./Heading"
import Wrapper from "./Wrapper"
import { contacts } from "../utils/constants"
import { motion } from "framer-motion"
import { translateLeft, translateRight } from "../utils/animations"

const Contact = () => {
  return (
    <Stack gap={4} mb="36px">
      {/* Heading */}
      <Heading title="Contact" />
      {/* Contact List */}
      <Stack gap={2} bgcolor="rgba(0,0,0,0.3)" m="auto" p="48px">
        {contacts.map((contact, idx) => (
          <Stack
            component={motion.div}
            whileInView={idx % 2 ? translateLeft : translateRight}
            viewport={{ once: true }}
            key={idx}
            flexDirection="row"
            alignItems="center"
            gap={2}
          >
            <Box component="img" src={contact.image} height="64px" width="64px" />

            {contact.link ? (
              <Link href={contact.link} target="_blank">
                <Typography fontFamily="Righteous" fontSize="22px">
                  {contact.text}
                </Typography>
              </Link>
            ) : (
              <Typography fontFamily="Righteous" fontSize="22px">
                {contact.text}
              </Typography>
            )}
          </Stack>
        ))}
      </Stack>
    </Stack>
  )
}

export default Wrapper(Contact, "contact")
