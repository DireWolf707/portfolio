import React, { useEffect } from "react"
import { useMediaQuery, Link, Box, Drawer, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { navLinks } from "../utils/constants"

const Sidebar = ({ open, setOpen }) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.only("xs"))

  useEffect(() => {
    if (!isSmall && open) setOpen(false)
  }, [isSmall])

  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={open}
      onClose={() => setOpen(false)}
      PaperProps={{
        sx: {
          bgcolor: "#1d1160",
          gap: 2,
          px: "12px",
          py: "24px",
        },
      }}
    >
      <Box component="img" src="navbar/logo.svg" height="140px" />
      <List sx={{ overflow: "auto" }}>
        {navLinks.map((link, idx) => (
          <Link key={idx} href={link.href} underline="none" onClick={() => setOpen(false)}>
            <ListItemButton>
              <ListItemIcon>{link.icon}</ListItemIcon>
              <ListItemText primary={link.title} />
            </ListItemButton>
          </Link>
        ))}
      </List>
    </Drawer>
  )
}

export default Sidebar
