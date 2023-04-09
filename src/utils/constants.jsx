import HomeIcon from "@mui/icons-material/Home"
import InfoIcon from "@mui/icons-material/Info"
import WorkIcon from "@mui/icons-material/Work"
import CodeIcon from "@mui/icons-material/Code"
import ContactPageIcon from "@mui/icons-material/ContactPage"

export const navLinks = [
  {
    title: "HOME",
    href: "#",
    icon: <HomeIcon />,
  },
  {
    title: "ABOUT",
    href: "#",
    icon: <InfoIcon />,
  },
  {
    title: "WORK",
    href: "#",
    icon: <WorkIcon />,
  },
  {
    title: "SKILLS",
    href: "#",
    icon: <CodeIcon />,
  },
  {
    title: "CONTACT",
    href: "#",
    icon: <ContactPageIcon />,
  },
]

export const workTags = {
  all: "all",
  frontend: "frontend",
  backend: "backend",
  blockchain: "blockchain",
  database: "database",
  mern: "mern",
  django: "django",
  reactjs: "reactjs",
}

export const workTagsArray = Object.values(workTags)

export const projects = [
  {
    title: "ABC",
    image: "/about/wolf-howl.png",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem",
    tags: [workTags.blockchain],
  },
  {
    title: "ABC",
    image: "/assets/wolf.svg",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.frontend],
  },
  {
    title: "ABC",
    image: "/assets/wolf.svg",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.backend],
  },
  {
    title: "ABC",
    image: "/assets/wolf.svg",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.database],
  },
]
