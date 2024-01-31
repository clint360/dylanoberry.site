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
  jobit,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  linkview,
  imessage,
  xchange,
  twitter,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  crypwatch,
  tripguide,
  threejs,
  schoolsavvy
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Technical Writer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
  {
    title: "Graphics Designer",
    icon: web,
  },
  {
    title: "Sound Designer",
    icon: mobile,
  },
];

const technologies = []
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Redux Toolkit",
//     icon: redux,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },
//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
//   {
//     name: "docker",
//     icon: docker,
//   },
// ];

const experiences = [
  {
    title: "Advanced AI Data Trainer",
    company_name: "Invisible Technologies",
    icon: "data:image/jpeg;base64,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",
    iconBg: "#000",
    date: "December 2023 - January 2024",
    points: [
      "Developed and shared effective strategies to improve productivity and efficiency",
      "Achieved a significant milestone by exceeding expectations and completing tasks at a rate of four times the baseline metric within the first week.",
      "Initiated efforts to boost morale on Slack through regular engagement and support.",
    ],
  },
  {
    title: "Chief Operating Officer",
    company_name: "Source Innovative Lending (pre-revenue startup of ~20 people)",
    icon: "data:image/png;base64,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",
    iconBg: "#000",
    date: "July 2023 - November 2023+",
    points: [
      "Crafted an AI art-powered marketing presentation that captivated the audience and increased engagement",
      "Conducted competitive analysis and persuaded the team to invest in developing advanced search features, improving user experience",
      "Led a cross-functional team and implemented parallel and asynchronous tasks",
    ],
  },
  {
    title: "Tutor",
    company_name: "Dot Com",
    icon: "https://media.licdn.com/dms/image/D4E03AQHnJVjI97sTXw/profile-displayphoto-shrink_800_800/0/1688040213877?e=2147483647&v=beta&t=Dvp4cvJtuMjYNugqfdWnrWqDPnVRcnp8kp39GW5pGKs",
    iconBg: "#fff",
    date: "August 2023 - September 2023",
    points: [
      "Created templates for remote tutoring sessions, helping students write different types of essays",
      "Taught students effective communication skills with tutors and professors",
      "Embraced voice chatting for enhanced learning experience and communication",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I'm truly marveled at how Clint is able to bring my figma designs to life, even the ones I thought should be very difficult. Clint is indeed Skillful.",
    name: "Boanong Joshua",
    designation: "UI/UX Designer",
    company: "OptimU",
    image: "https://media.licdn.com/dms/image/C5603AQHPgcHCnvja0A/profile-displayphoto-shrink_800_800/0/1553244387743?e=2147483647&v=beta&t=ySrlKHPHsPGRUaNL2hb-MQ2Tc_IjpqKU1XTbSGN6MF8",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Clint does.",
    name: "Mbah Daniel",
    designation: "CEO",
    company: "Elite Panel237",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Clint has been the most 'open-to-learn-new-things' student I have had in all my Algorithms and data structures classes",
    name: "Carlyle Ankeambom",
    designation: "Tutor",
    company: "Rebase Academy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYI05R8njC7PiGxxK_l04fxSBAVOV68Op0S-HaNH48kFJ480Y-V7ouPY7jC6RINKdxVNE&usqp=CAU",
  },
];

const projects = [];

export { services, technologies, experiences, testimonials, projects };
