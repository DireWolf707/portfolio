import InfoIcon from "@mui/icons-material/Info"
import TerminalIcon from '@mui/icons-material/Terminal';
import CodeIcon from "@mui/icons-material/Code"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"

export const navHeight = "12.5vh"

export const navLinks = [
  {
    title: "ABOUT",
    href: "#about",
    Icon: InfoIcon,
  },
  {
    title: "WORK",
    href: "#work",
    Icon: TerminalIcon,
  },
  {
    title: "SKILLS",
    href: "#skills",
    Icon: CodeIcon,
  },
  {
    title: "EXPERIENCE",
    href: "#experience",
    Icon: CalendarMonthIcon,
  },
  {
    title: "CONTACT",
    href: "#contact",
    Icon: ContactPageIcon,
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
    name: "ABC",
    image: "/about/wolf-howl.png",
    description: "lorem lorem lorem lorem lorem lorem lorem lorem",
    tags: [workTags.blockchain],
  },
  {
    name: "ABC",
    image: "/about/wolf-howl.png",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.frontend],
  },
  {
    name: "ABC",
    image: "/about/wolf-howl.png",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.backend],
  },
  {
    name: "ABC",
    image: "/about/wolf-howl.png",
    description: "lorem lorem lorem lorem lorem",
    tags: [workTags.database],
  },
]

export const skills = [
  {
    name: "Languages",
    techs: [
      { name: "Javascript", image: "/skills/language/js.svg" },
      { name: "Python", image: "/skills/language/py.svg" },
      { name: "Solidity", image: "/skills/language/solidity.svg" },
      { name: "C++", image: "/skills/language/c++.svg" },
      { name: "Go", image: "/skills/language/go.svg" },
      { name: "Java", image: "/skills/language/java.svg" },
    ],
  },
  {
    name: "Backend",
    techs: [
      { name: "Node JS", image: "/skills/backend/node.svg" },
      { name: "Payload CMS", image: "/skills/backend/payload.svg" },
      { name: "Socket IO", image: "/skills/backend/socket.svg" },
      { name: "Django", image: "/skills/backend/django.svg" },
      { name: "FastAPI", image: "/skills/backend/fastapi.svg" },
    ],
  },
  {
    name: "Frontend",
    techs: [
      { name: "React JS", image: "/skills/frontend/react.svg" },
      { name: "Next JS", image: "/skills/frontend/next.svg" },
      { name: "Material UI", image: "/skills/frontend/mui.svg" },
      { name: "Redux Toolkit", image: "/skills/frontend/redux.svg" },
      { name: "React Router", image: "/skills/frontend/react-router.svg" },
      { name: "Framer Motion", image: "/skills/frontend/framer-motion.svg" },
      { name: "Svelte", image: "/skills/frontend/svelte.svg" },
      { name: "Tailwind", image: "/skills/frontend/tailwind.svg" },
    ],
  },
  {
    name: "Database",
    techs: [
      { name: "MongoDB", image: "/skills/database/mongo.svg" },
      { name: "MySQL", image: "/skills/database/mysql.svg" },
      { name: "Redis", image: "/skills/database/redis.svg" },
    ],
  },
  {
    name: "Platforms",
    techs: [
      { name: "Github", image: "/skills/platforms/github.svg" },
      { name: "Auth0", image: "/skills/platforms/auth0.svg" },
      { name: "Firebase", image: "/skills/platforms/firebase.svg" },
      { name: "Render", image: "/skills/platforms/render.svg" },
      { name: "Vercel", image: "/skills/platforms/vercel.svg" },
      { name: "Netlify", image: "/skills/platforms/netlify.svg" },
      { name: "Heroku", image: "/skills/platforms/heroku.svg" },
    ],
  },
  {
    name: "Tools",
    techs: [
      { name: "Docker", image: "/skills/tools/docker.svg" },
      { name: "Git", image: "/skills/tools/git.svg" },
    ],
  },
  {
    name: "Miscellaneous",
    techs: [
      { name: "Linux", image: "/skills/misc/linux.svg" },
      { name: "Hardhat", image: "/skills/misc/hardhat.svg" },
      { name: "Playwright", image: "/skills/misc/playwright.svg" },
      { name: "Scrapy", image: "/skills/misc/scrapy.png" },
      { name: "Selenium", image: "/skills/misc/selenium.svg" },
    ],
  },
]
