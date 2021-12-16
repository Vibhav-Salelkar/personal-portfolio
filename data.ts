import { ISkill, IExperience, IWorkExperience, IProject } from "./type";
import { RiComputerLine } from "react-icons/ri";
import { FaServer, FaTools } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";

export const skills: ISkill[] = [
  {
    title: "Frontend Development",
    about:
      "Experience with Javascript/Typescript, React, Redux, Jquery, Bootstrap, Tailwind, Material UI, NextJs, HTML, CSS, LESS, Sass",
    Icon: RiComputerLine,
  },
  {
    title: "Backend Development",
    about:
      "Experience with backend technologies like NodeJS, Express, PHP, MongoDB and SQL.",
    Icon: FaServer,
  },
  {
    title: "Version Control & tools",
    about:
      "Experience working with Github, Bitbucket, GitLab and tools like Jira and Asana",
    Icon: FaTools,
  },
  {
    title: "Programming languages",
    about: "Javascript, TypeScript, PHP, Basics of Python & C++",
    Icon: MdDeveloperMode,
  },
];

export const educationExperience: IExperience[] = [
  {
    title: "Electronics & Telecommunication Engineering",
    subtitle: "Goa College of Engineering (2016-2020)",
    score: "Aggregate Percentage: 75.21%, CGPA: 7.92",
  },
  {
    title: "Higher Secondary School (Science)",
    subtitle: "GVM's S.N.J.A. Higher Secondary School(2014-2016)",
    score: "Aggregate Percentage: 80.17%",
  },
  {
    title: "Secondary School (Science)",
    subtitle: "I.V.B.D High School (2008-2014)",
    score: "Aggregate Percentage: 88.33%",
  },
];

export const workExperience: IWorkExperience[] = [
  {
    title: "Software Developer",
    subtitle: "Hummingbird Web Solutions",
    url: "https://hbwsl.com/",
    tenure: "February 2021 - Present",
    about:
      "Work on building, optimising and scaling the wordpress plugin products and themes. Also E-Commerce solutions to clients using Adobe Magento2. Tech Stack & tools: React, Redux, PHP, SQL, Wordpress, KnockoutJs, Magento 2, Github, Bitbucket, Jira",
  },
  {
    title: "Junior Developer",
    subtitle: "Cybertrom Digital Services",
    url: "http://cybertrom.com/",
    tenure: "September 2020 - December 2020 (4 Months)",
    about:
      "Worked on building system for Alderwwood Education that automates most of their administrative tasks like onboarding, finances, invoices, clients management, email reminders etc. Tech Stack & tools: Javascript, Laravel 8 PHP Framework, Tailwind, jQuery, Gitlab, Docker",
  },
];

export const projects: IProject[] = [
  {
    id: 1,
    name: "Personal Portfolio",
    desc: "This is my Personal Portfolio developed using NextJs and TypeScript",
    img: "portfolio.png",
    source: "https://vibhavsalelkar.netlify.app/",
    github: "https://github.com/Vibhav-Salelkar/personal-portfolio",
    category: ["react","javascript/typescript","next"],
    tech: ["React","TypeScript", "NextJs","Tailwind"],
  },
  {
    id: 2,
    name: "Memories Social Media App",
    desc: "MERN Stack app where user can create account, post memories, like, comment on others post. Also added features like pagination, related posts and many more.",
    img: "",
    source: "",
    github: "https://github.com/Vibhav-Salelkar/memories-crud",
    category: ['react','node','mongo','javascript/typescript'],
    tech: ['MongoDB','Express','React','NodeJs'],
  },
  {
    id: 3,
    name: "Simple REST API",
    desc: "Simple CRUD operation on data to understand use case using REST API. Developed using Express, Node, React.",
    img: "",
    source: "",
    github: "https://github.com/Vibhav-Salelkar/restapi",
    category: ['react','node',"javascript/typescript"],
    tech: ['Express','React','NodeJs'],
  },
  {
    id: 4,
    name: "Jira like App with DnD library",
    desc: "This is Drag and drop progress tracker app developed using DnD library to understand use case of DnD.",
    img: "",
    source: "https://iwev0.csb.app/",
    github: "https://codesandbox.io/s/jira-clone-iwev0",
    category: ['react','javascript/typescript'],
    tech: ["React", "CSS"],
  },
  {
    id: 5,
    name: "Github Style Markdown Previewer",
    desc: "This is markdown previewer just like one in github. Tried creating one with React and Saas as preprocessor.",
    img: "markdown.png",
    source: "https://codepen.io/vibhav1998/full/qBqoQYZ",
    github: "https://codepen.io/vibhav1998/pen/qBqoQYZ",
    category: ["react","javascript/typescript"],
    tech: ["React", "Sass", "CSS", "jQuery"],
  },
  {
    id: 6,
    name: "Random Quote Generator",
    desc: "Developed to solve a challenge on freeCodeCamp.",
    img: "quote.png",
    source: "https://codepen.io/vibhav1998/full/OJbQxeO",
    github: "https://codepen.io/vibhav1998/pen/OJbQxeO",
    category: ["react","javascript/typescript"],
    tech: ["React", "Sass", "CSS", "jQuery"],
  },
  {
    id: 7,
    name: "Burger Builder",
    desc: "Burger Builder is fun app developed using ReactJS. This app strengthened my core react concepts. It covers states, lifecycle hooks, functional & class based components, communication between components using props chains, optimizing it using React.memo() and adding PropTypes, writing better project folder structure, dynamic stylings and rendering.",
    img: "burger.png",
    source: "https://qdnlm.csb.app/",
    github: "https://github.com/Vibhav-Salelkar/Burger-Builder",
    category: ["react","javascript/typescript"],
    tech: ["React", "CSS"],
  },
  {
    id: 8,
    name: "To-Do App",
    desc: "To-Do app is developed using ReactJS to understand use cases of various concepts like states, props, hooks, conditional rendering and local storage",
    img: "todo.png",
    source: "https://sotpc.csb.app/",
    github: "https://github.com/Vibhav-Salelkar/To-Do-App",
    category: ["react","javascript/typescript"],
    tech: ["React", "CSS"],
  },
  {
    id: 9,
    name: "FindMePlace",
    desc: "FindMePlace is a place recommendation app based on states. This app is developed using ReactJS library",
    img: "findmeplace.png",
    source: "https://whjgf.csb.app/",
    github: "https://github.com/Vibhav-Salelkar/FindMePlace",
    category: ["react","javascript/typescript"],
    tech: ["React", "CSS"],
  },
  {
    id: 10,
    name: "Emoticon Interpreter",
    desc: "This is a fun ReactJS app which translates emoji entered as an input.",
    img: "emoji.png",
    source: "https://jft36.csb.app/",
    github: "https://github.com/Vibhav-Salelkar/Emoji-interpreter",
    category: ["react","javascript/typescript"],
    tech: ["React", "CSS"],
  },
  {
    id: 11,
    name: "Article Rewriter",
    desc: "Article rewriter will rephrase your article for SEO. Do give it a try. This might not be a polished state but its just fun right?",
    img: "article.png",
    source: "https://rewritearticle.netlify.app/",
    github: "https://github.com/Vibhav-Salelkar/article-rewriter",
    category: ["javascript/typescript"],
    tech: ["Javascript", "HTML", "CSS"],
  },
  {
    id: 12,
    name: "Banana Talk",
    desc: "Banana Talk is basic funny translation app which translates your text into minion language.",
    img: "banana.png",
    source: "https://banana-api.netlify.app/",
    github: "https://github.com/Vibhav-Salelkar/translation-app",
    category: ["javascript/typescript"],
    tech: ["Javascript", "HTML", "CSS"],
  },
];
