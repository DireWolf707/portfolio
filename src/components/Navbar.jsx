import React from "react"
import { useMediaQuery, Stack, Box, Link, IconButton } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu"
import { navLinks } from "../utils/constants"

const Navbar = ({ setOpen, navHeight = "96px" }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))

  return (
    <>
      <Stack
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          position: "fixed",
          height: navHeight,
          width: "100%",
          borderBottom: "3px white solid",
          bgcolor: "rgba(0,0,0,0.2)",
          backdropFilter: "blur(3px)",
          px: {
            xs: "12px",
            sm: "24px",
          },
        }}
      >
        <Box component="img" src="/navbar/logo.svg" height="65px" />
        {isSmall ? (
          <IconButton onClick={() => setOpen(true)}>
            <MenuIcon />
          </IconButton>
        ) : (
          <Stack flexDirection="row" gap={2}>
            {navLinks.map((link, idx) => (
              <Stack key={idx} flexDirection="row" alignItems="center" gap={0.3}>
                {link.icon}
                <Link href={link.href} underline="hover" variant="body2" color="inherit">
                  {link.title}
                </Link>
              </Stack>
            ))}
          </Stack>
        )}
      </Stack>

      <Box height={navHeight} />
    </>
  )
}

export default Navbar
