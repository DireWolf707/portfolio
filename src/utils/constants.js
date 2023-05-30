import InfoIcon from "@mui/icons-material/Info"
import TerminalIcon from "@mui/icons-material/Terminal"
import CodeIcon from "@mui/icons-material/Code"
import ContactPageIcon from "@mui/icons-material/ContactPage"
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth"
import SchoolIcon from "@mui/icons-material/School"
import LaptopChromebookIcon from "@mui/icons-material/LaptopChromebook"
import WorkIcon from "@mui/icons-material/Work"

export const navHeight = "96px"

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
  fullstack: "fullstack",
  frontend: "frontend",
  expressjs: "expressjs",
  reactjs: "reactjs",
  drizzle: "drizzle",
  prisma: "prisma",
  socketio: "socket.io",
}

export const workTagsArray = Object.values(workTags)

export const projects = [
  {
    title: "Wolf Shop",
    image: "/work/wolf-shop.jpg",
    deployedLink: "https://wolf-shop.vercel.app",
    subTitle: "e-commerce",
    description: [
      "Razorpay Integration",
      "Cart implementation with RTK",
      "Buy Now/Add To Cart functionality",
      "Custom Invoice generation",
      "Product grid",
      "Product detail page",
      "Orders page",
      "Responsive",
    ],
    tags: [workTags.fullstack, workTags.reactjs, workTags.expressjs, workTags.prisma],
  },
  {
    title: "Wolfy Sky",
    image: "/work/wolfy-sky.jpg",
    deployedLink: "https://wolfy-sky.vercel.app",
    subTitle: "social media",
    description: [
      "Twitter inspired feed",
      "Tweet with image/video upload functionality",
      "Infinite nested comments system",
      "like/comment/follow functionality",
      "Notification functionality",
      "Realtime #likes, #comments and #notifications functionality",
      "Search functionality",
      "Profile page",
      "Responsive",
    ],
    tags: [workTags.fullstack, workTags.socketio, workTags.reactjs, workTags.expressjs, workTags.drizzle],
  },
  {
    title: "MediaTube",
    image: "/work/mediatube.jpg",
    deployedLink: "https://wolf-mediatube.vercel.app",
    subTitle: "video watching",
    description: [
      "RapidAPI Integration",
      "Search functionality",
      "Video detail page with suggestions and play functionality",
      "Video grid",
      "Category menu",
      "Responsive",
    ],
    tags: [workTags.frontend, workTags.reactjs],
  },

  {
    title: "IGDB",
    image: "/work/igdb.jpg",
    deployedLink: "https://wolf-igdb.vercel.app",
    subTitle: "game information",
    description: [
      "RapidAPI Integration",
      "Search functionality",
      "Game detail modal with more info and images",
      "Game grid",
      "Responsive",
    ],
    tags: [workTags.frontend, workTags.reactjs],
  },
  {
    title: "Songify",
    image: "/work/songify.jpg",
    deployedLink: "https://wolf-songify.vercel.app",
    subTitle: "song listening",
    description: [
      "RapidAPI Integration",
      "Search functionality",
      "Popular songs recommendation according to user's location",
      "Category menu",
      "Top Artists/Top Charts page",
      "Song detail page with artist info and play functionality",
      "Responsive",
    ],
    tags: [workTags.frontend, workTags.reactjs],
  },
  {
    title: "Wolfy Thoughts",
    image: "/work/wolfy-thoughts.jpg",
    deployedLink: "https://wolfy-thoughts.vercel.app",
    subTitle: "thought sharing",
    description: [
      "Public feed",
      "Text post functionality",
      "Single level comment system",
      "like/comment functionality",
      "Realtime #likes and #comments functionality",
      "Responsive",
    ],
    tags: [workTags.fullstack, workTags.socketio, workTags.reactjs, workTags.expressjs, workTags.drizzle],
  },
]

export const skills = [
  {
    name: "Languages",
    techs: [
      { name: "Javascript", image: "/skills/language/js.svg" },
      { name: "Python", image: "/skills/language/py.svg" },
      { name: "Solidity", image: "/skills/language/solidity.svg" },
      { name: "sql", image: "/skills/language/sql.svg" },
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
      { name: "PostgreSQL", image: "/skills/database/postgresql.svg" },
      { name: "Redis", image: "/skills/database/redis.svg" },
      { name: "DrizzleORM", image: "/skills/database/drizzle.svg" },
      { name: "PrismaORM", image: "/skills/database/prisma.svg" },
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
    iconStyle: { background: "rgb(210,141,32)" },
    contentStyle: { background: "rgb(210,141,32)" },
    contentArrowStyle: { borderRight: "7px solid rgb(210,141,32)" },
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
    title: "GATE (CS) 2023",
    subTitle: "National level exam organized by IISc and 7 IITs",
    description: ["Scored AIR 3168"],
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
  // {
  //   image: "/contact/twitter.svg",
  //   link: "https://twitter.com/direwolf_707",
  //   text: "Twitter",
  // },
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
