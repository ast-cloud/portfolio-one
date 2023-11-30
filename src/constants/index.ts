import {
    mobile,
    backend,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    docker,
    threejs,
    aws,
    graphql,
    redis,
    python,
    websocket,
    coursehub,
    codetown,
    tcs,
    techstax,
    cobuild,
    rt
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
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Backend developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: mobile,
    },
    {
      title: "Distributed scalable systems",
      icon: backend,
    }
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
      name: "React JS",
      icon: reactjs,
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
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Docker",
      icon: docker,
    },
    {
      name: "AWS",
      icon: aws,
    },
    {
      name: "GraphQL",
      icon: graphql,
    },
    {
      name: "Redis",
      icon: redis,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Web-sockets",
      icon: websocket,
    },
  ];
  
  const experiences = [
    {
      title: "Developer",
      company_name: "TCS",
      icon: tcs,
      iconBg: "#fff",
      date: "Oct 2021 - Present",
      points: [
        "Developing and maintaining web applications written in MERN stack.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      externalLink: {
        exists: false,
        name: '',
        value: ''
      }
    },
    {
      title: "Python developer intern",
      company_name: "TechStax Pvt. Ltd.",
      icon: techstax,
      iconBg: "#E6DEDD",
      date: "Apr 2021 - June 2021",
      points: [
        "Developing and maintaining backends of web applications in Flask framework of Python.",
        "Collaborating with teams from various organisations working in multiple timezones (5 countries) for integrating our APIs and webhooks with their products.",
        "Developed and tested REST APIs in Flask.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
      externalLink: {
        exists: true,
        name: 'View certificate',
        value: 'https://res.cloudinary.com/dscv2dlik/image/upload/v1699438810/Intership%20Certificates/TechStax_ExpLetter.jpg'
      }
    },
    {
      title: "Python developer intern",
      company_name: "CoBuild Constructions Pvt. Ltd.",
      icon: cobuild,
      iconBg: "#fff",
      date: "Jan 2020 - Feb 2020",
      points: [
        "Created plugins in Python for Building Information Modelling softwares to automate tasks relating to construction flow.",
        "Implemented algorithms to solve problems related to construction and building.",
        "One of the algorithm ended up reducing material wastage from 10% to 6%, which saved them millions of dollars in big construction projects.",
      ],
      externalLink: {
        exists: true,
        name: 'View certificate',
        value: 'https://res.cloudinary.com/dscv2dlik/image/upload/v1699438549/Intership%20Certificates/Cobuild.jpg'
      }
    },
    {
      title: "PHP developer intern",
      company_name: "Ritronix Technology Pvt. Ltd.",
      icon: rt,
      iconBg: "#fff",
      date: "May 2019 - Jul 2019",
      points: [
        "Developed backend for an android application in PHP.",
        "Created REST APIs and database queries for PostgreSQL.",
        "The app was used by a food delivery startup (Mahamania) to display products and process their day to day orders.",
      ],
      externalLink: {
        exists: true,
        name: 'Playstore link',
        value: 'https://play.google.com/store/apps/details?id=com.hello.mahamania'
      }
    },
  ];
  
  const projects = [
    {
      name: "Course Hub",
      description:
        "An online learning platform created in Next.js with Typescript. Users can login, view and purchase courses. Admin can create/edit courses. Fully responsive using Flexbox and MediaQueries.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "monorepo",
          color: "orange-text-gradient",
        },
        {
          name: "recoil",
          color: "pink-text-gradient",
        },
        {
          name: "reactMUI",
          color: "blue-text-gradient",
        },
        {
          name: "axios",
          color: "green-text-gradient",
        },
      ],
      image: coursehub,
      source_code_link: "https://github.com/ast-cloud/course-app",
    },
    {
      name: "Code Town",
      description:
        "An online coding platform created in Next.js. Users can view and solve problems in 4 languages (C, C++, Java, Python). User's code is sent to CodeRunner component, which is an express server running in a dockerised environment in an AWS EC2 instance.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "TS",
          color: "green-text-gradient",
        },
        {
          name: "mongodb",
          color: "pink-text-gradient",
        },
        {
          name: "docker",
          color: "blue-text-gradient",
        },
        {
          name: "AWS",
          color: "orange-text-gradient",
        },
      ],
      image: codetown,
      source_code_link: "https://github.com/ast-cloud/code-town",
    }
  ];
  
  export { services, technologies, experiences, projects };