import {
  html,
  css,
  javascript,
  tailwindcss,
  typescript,
  reactjs,
  zustand,
  nodejs,
  expressjs,
  mongodb,
  git,
  csharp,
} from "../assets/tech";
import { poke, chappy } from "../assets/personal";
import { claro } from "../assets/companies";

const navLinks = [
  {
    id: "about",
    name: "About",
  },
  {
    id: "tech",
    name: "Tech",
  },
  {
    id: "work",
    name: "Work",
  },
];

const services = [{}];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TailwindCSS",
    icon: tailwindcss,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "ReactJS",
    icon: reactjs,
  },
  {
    name: "Zustand",
    icon: zustand,
  },
  {
    name: "NodeJS",
    icon: nodejs,
  },
  {
    name: "ExpressJS",
    icon: expressjs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "C#",
    icon: csharp,
  },
];

const experience = [
  {
    title: "PokeAPI",
    company_name: "Personal experience",
    icon: poke,
    iconBg: "#202020",
    date: "September 2022 - November 2022",
    points: [
      "Querying data with async and await along with fecth",
      "Quering data with .then() along with fetch",
      "Data mapping for subsequent sampling",
      "Routing usage",
    ],
  },
  {
    title: "Application documentation",
    company_name: "Claro",
    icon: claro,
    iconBg: "#fff",
    date: "November 2022 - Octover 2023",
    points: [
      "In my intership whit the company they assigned me to document applications",
      "Teamwork if there were problems with any application",
      "Make queries to a database for subsequent sampling",
    ],
  },
  {
    title: "Chappy",
    company_name: "Personal experience",
    icon: chappy,
    iconBg: "#202020",
    date: "January 2023 - March 2023",
    points: [
      "API REST",
      "Use of MERN",
      "More complex routing",
      "Use of tokens for application and data security",
      "Use of sockets for real-time chat",
    ],
  },
];

const pink = "pink-text-gradient";
const blue = "blue-text-gradient";
const brown = "brown-text-gradient";
const green = "green-text-gradient";
const red = "red-text-gradient";
const white = "white-text-gradient";

const projects = [
  {
    name: "PokeAPI",
    description:
      "API consumptio for sampling data fetched from the PokeAPI, filtered by type, and searchable by name or character",
    tags: [
      {
        name: "React",
        color: blue,
      },
      {
        name: "Tailwind",
        color: pink,
      },
    ],
    image: "PokeAPI image",
    source_code_link: "https://github.com/",
  },
  {
    name: "Chappy",
    description: "Real-time chat application whit user authentication",
    tags: [
      {
        name: "React",
        color: blue,
      },
      {
        name: "Tailwind",
        color: pink,
      },
      {
        name: "Zustand",
        color: brown,
      },
      {
        name: "Mongo",
        color: green,
      },
      {
        name: "Express",
        color: white,
      },
      {
        name: "Socket",
        color: red,
      },
    ],
    image: "Chappy image",
    source_code_link: "https://github.com/"
  },
];

export { navLinks, services, technologies, experience, projects };
