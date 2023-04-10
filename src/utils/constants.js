import InfoIcon from "@mui/icons-material/Info"
import TerminalIcon from "@mui/icons-material/Terminal"
import CodeIcon from "@mui/icons-material/Code"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import SchoolIcon from "@mui/icons-material/School"
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook"
import WorkIcon from "@mui/icons-material/Work"

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

export const experienceTypes = {
  work: "work",
  education: "education",
  coding: "coding",
}

export const experienceMetadata = {
  [experienceTypes.work]: {
    icon: WorkIcon,
    iconStyle: { background: "rgb(0,0,150)" },
    contentStyle: { background: "rgb(0,0,150)" },
    contentArrowStyle: { borderRight: "7px solid rgb(0,0,150)" },
  },
  [experienceTypes.coding]: {
    icon: LaptopChromebookIcon,
    iconStyle: { background: "rgb(0,80,80)" },
    contentStyle: { background: "rgb(0,80,80)" },
    contentArrowStyle: { borderRight: "7px solid rgb(0,80,80)" },
  },
  [experienceTypes.education]: {
    icon: SchoolIcon,
    iconStyle: { background: "rgb(150,0,0)" },
    contentStyle: { background: "rgb(150,0,0)" },
    contentArrowStyle: { borderRight: "7px solid rgb(150,0,0)" },
  },
}

export const experiences = [
  /* template
  {
    title: "Creative Director",
    subTitle: "Miami, FL",
    description: ["Lorem ipsum dolor, sit amet",],
    type: experienceTypes.work,
    date: "",
    link: {
      name: "heheh",
      href: "",
    },
  },
  */
  {
    title: "Gate 2023",
    subTitle: "CBT organized by the Indian Institute of Technology Kanpur",
    description: ["scored AIR 3168"],
    type: experienceTypes.education,
    date: "Feb 2023",
  },
  {
    title: "Project Intern",
    subTitle: "Delhi Secretariat (IT Department)",
    description: ["Completed a mentored project on 'Web development with database connectivity'."],
    type: experienceTypes.work,
    date: "Jul 19 - Sep 9, 2022",
  },
  {
    title: "Filecoin Next Step Microgrant",
    description: ["Awarded with a grant to continue work on the open source project made using IPFS/ Filecoin during Electrothon 4.0."],
    type: experienceTypes.coding,
    date: "July 2022",
    link: {
      name: "Project Proposal",
      href: "https://github.com/filecoin-project/devgrants/issues/707",
    },
  },
  {
    title: "Electrothon 4.0",
    subTitle: "Hackathon organized by SPEC, NIT Hamirpur",
    description: [
      "Won 'Best use of IPFS and/or Filecoin'",
      "Built a better decentralized storage solution using IPFS, Moralis and Svelte (Frontend)",
    ],
    type: experienceTypes.coding,
    date: "Feb 19-20, 2022",
    link: {
      name: "Project Details",
      href: "https://devfolio.co/projects/decentralized-dropbox-db03",
    },
  },
  {
    title: "Cloud Native Hackathon",
    subTitle: "Hackathon organized by Community Classroom (Kunal Kushwaha)",
    description: [
      "Won first prize in 'Best use of Symbl.ai'",
      "Integrated 3 third-party APIs/SDK including Twilio, Symbl.ai, & Alan.ai",
      "Built a better customer support system using Django, FastAPI, Redis, PostgreSQL, and Javascript (Frontend)",
    ],
    type: experienceTypes.coding,
    date: "Dec 10-12, 2021",
    link: {
      name: "Project Details",
      href: "https://devpost.com/software/customer-support-crm",
    },
  },
  {
    title: "Exam AZ-900: Microsoft Azure Fundamentals",
    description: ["Gained foundational level knowledge of cloud services and how those services are provided with Microsoft Azure"],
    type: experienceTypes.coding,
    date: "May 17, 2021",
    link: {
      name: "Certificate",
      href: "https://www.credly.com/badges/343b6f7a-422b-4fb0-890b-6fe76900c120/public_url",
    },
  },
  {
    title: "CBSE Board XII",
    description: ["scored 96.8% (Science)"],
    type: experienceTypes.education,
    date: "2020",
  },
  {
    title: "CBSE Board X",
    description: ["scored 92%"],
    type: experienceTypes.education,
    date: "2018",
  },
]

export const contacts = [
  {
    image: "/contact/twitter.svg",
    link: "https://twitter.com/direwolf_707",
    text: "Twitter",
  },
  {
    image: "/contact/linkedin.svg",
    link: "https://www.linkedin.com/in/rahulsood707",
    text: "Linkedin",
  },
  {
    image: "/contact/github.svg",
    link: "https://github.com/DireWolf707",
    text: "Github",
  },
  {
    image: "/contact/mail.svg",
    link: "mailto: rahulsood707@gmail.com",
    text: "Mail",
  },
  {
    image: "/contact/phone.svg",
    text: "9958459356",
  },
  {
    image: "/contact/location.svg",
    text: "East Delhi, India",
  },
]
