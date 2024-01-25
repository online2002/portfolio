import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  parking,
  HOD,
  man,
  angular,
  sql,
  flutter,
  dotnet
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React Developer",
    icon: reactjs,
  },
  {
    title: "Flutter Developer",
    icon: flutter,
  },
  {
    title: ".NET Developer",
    icon: dotnet,
  },
  {
    title: "SQL Developer",
    icon: sql,
  },
];

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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "angular",
    icon: angular,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Angular Developer",
    company_name: "Silverxis India Ltd.",
    icon: angular,
    iconBg: "#383E56",
    date: "June 2022 - January 2023",
    points: [
      "Developing and maintaining web applications using Angular.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "SQL Developer",
    company_name: "Silverxis India Ltd.",
    icon: sql,
    iconBg: "#383E56",
    date: "June 2022 - January 2023",
    points: [
      "Designing databases and ensuring their stability, reliability, and performance. ",
      "Design, create, and implement database systems based on the end user's requirements. ",
      "Fix any issues related to database performance and provide corrective measures. ",
      "Create complex functions, scripts, stored procedures and triggers to support application development.",
    ],
  },
  {
    title: ".NET developer",
    company_name: "Silverxis India Ltd.",
    icon: dotnet,
    iconBg: "#383E56",
    date: "June 2022 - January 2023",
    points: [
      "Design, create and maintain applications using the .NET platform and environment.",
      "Understand requirements and transform them into functional applications in line with business objectives",
      "Rewriting/making changes in existing code structure to increase efficiency and performance.",
      "Test, monitor, and make better solutions through incremental updates/new features/app optimization.",
    ],
  },
  // {
  //   title: "Metaverse Game Devlopement",
  //   company_name: "Meta",
  //   icon: meta,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2023 - Present",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "Found a Student with high Potential, we are Proud of you, keep it up!!",
    name: "Prof. ",
    designation: "HOD of Information Technology",
    company: "L.D. collage of Engineering",
    image: HOD,
  },
  {
    testimonial:
      "I've never met a developer who truly cares about their clients' success like Vivek does.",
    name: "Vivek Panchal",
    designation: "CEO",
    company: "RD Enterprise",
    image: man,
  },
  {
    testimonial:
      "After Vivek developed and done SEO of our Company Profile the traffic was increased by 15%",
    name: "Dinesh Panchal",
    designation: "CEO",
    company: "Shree Mahakali Engineering",
    image: man,
  },
];

const projects = [
  {
    name: "VidMate",
    description:
      "A Web Platform the help the dwellers to look for their near around Parking Spaces also with Realtime Availablity feature.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "API,TailwindCSS",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: parking,
    source_code_link: "https://videomate.netlify.app/",
  },
  {
    name: "GP Store",
    description:
      "A Web Application that provide facility that enables Senior Student to share their Notes and Book with the Freshers",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "commerce.js",
        color: "green-text-gradient",
      },
      {
        name: "TailwindCSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://gpstore.netlify.app",
  },
  {
    name: "Chatroom607",
    description:
      "A Platform that provide Relaxation during times of pandemic of COVID, enable People to communicate and share their story of survival of COVID Pandemix",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "socket.io",
        color: "green-text-gradient",
      },
      {
        name: "heroku",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://chatroom607.netlify.app",
  },
  // {
  //   name: "KHIDKI -The Video Chat",
  //   description:
  //     "Web application that enables users to have a face to face communication with a Long Distance Friends at the FingerTip",
  //   tags: [
  //     {
  //       name: "react",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "socket.io",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "netlify",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   image: tripguide,
  //   source_code_link: "https://videochat1203.netlify.app",
  // },
  
];

export { services, technologies, experiences, testimonials, projects };
