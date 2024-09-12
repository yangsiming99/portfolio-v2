import portfolio from "../images/Other/portfolio.png";

import hslv from "../images/hillsideWealth/HillSideWealth_1.png";
import hsdb from "../images/hillsideWealth/Database.png";
import hscv from "../images/hillsideWealth/calculator.png";
import hskv from "../images/hillsideWealth/keyStats.png";

import ts from "../images/Other/topstars.png";

import polv from "../images/playon/playon-login.png";
import podv from "../images/playon/playon-dashboard.png";
import popv from "../images/playon/playon-profile.png";

export const PROJECTS = [
  {
    title: "Web Portfolio",
    images: [
      {
        src: portfolio.src,
        alt: "login screen of the hillside wealth project",
      },
    ],
    description: [
      "The Page you are currently on. Built using AstroJS, React, and Tailwind + DaisyUI. The Interface is designed to be usable across both desktop and mobile. The site is deployed online through the use of Firebase",
    ],
    tech: [
      "React",
      "TypeScript",
      "AstroJS",
      "TailWind",
      "DaisyUI",
      "Server-Side Rendering",
      "Client-Side Rendering",
      "Firebase",
    ],
    links: [
      {
        button: "View Git Repo",
        url: "https://google.com",
      },
    ],
    id: "web",
  },
  {
    title: "PlayOn! Canada Web application",
    images: [
      {
        src: polv.src,
        alt: "login screen of the hillside wealth project",
      },
      {
        src: podv.src,
        alt: "login screen of the hillside wealth project",
      },
      {
        src: popv.src,
        alt: "login screen of the hillside wealth project",
      },
    ],
    description: [
      "A Street Hockey Tournament management web application for PlayOn! Canada",
      "The Front-end User interface was created using TypeScript, React, and Material-UI. The web application is hosted on Firebase.",
      "The Backend Server was created using NodeJS, Typescript, and Express, and was deployed online using Docker and Google Cloud Run. Data was stored in a PostgreSQL database hosted by Neon.",
    ],
    tech: [
      "React",
      "Typescript",
      "Material-UI",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Firebase",
      "Docker",
      "Google Cloud Run",
      "Vite",
      "Client-Side Rendering",
    ],
    links: [],
    id: "pl",
  },

  {
    title: "Hillside Wealth AutoStocks",
    images: [
      {
        src: hslv.src,
        alt: "login view for the hillside Wealth Autostock Project",
      },
      {
        src: hsdb.src,
        alt: "Database view for the hillside Wealth Autostock Project",
      },
      {
        src: hscv.src,
        alt: "Calculation view for the hillside Wealth Autostock Project",
      },
      {
        src: hskv.src,
        alt: "Key value view for the hillside Wealth Autostock Project",
      },
    ],
    description: [
      "2nd place winning BCIT Industry Sponsered Student Project.",
      "A web application created to automate manual data entry tasks, streamline the process of checking quartly reports, and display important data summaries at a glance. Currenty deployed online using Heroku. ",
    ],
    tech: [
      "HTML5",
      "CSS",
      "Javascript",
      "NodeJS",
      "Express",
      "PostgreSQL",
      "Heroku",
      "Handlebars",
      "Server-side Rendering",
      "Bootstrap",
    ],
    links: [
      {
        button: "View Git Repo",
        url: "https://github.com/yangsiming99/HillsideWealth-AutoStocks",
      },
      {
        button: "Visit Site",
        url: "https://hillsidewealth-stocks.herokuapp.com/collection",
      },
    ],
    id: "hsw",
  },
  {
    title: "USTARLinks Web Application",
    images: [
      {
        src: ts.src,
        alt: "login screen of the USTARlinks web app",
      },
    ],
    description: [
      "A social media platform being worked on at Madoor that allowed people in post-secondary institutions earn money by answering questions from potential students.",
      "I worked on implementing planned features in the front-end and fixing reported bugs.",
    ],
    tech: [
      "React",
      "MaterialUI",
      "Sass",
      "Jira",
      "BitBucket",
      "Client-Side Rendering",
    ],
    links: [],
    id: "topstars",
  },
];
