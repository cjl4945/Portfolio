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
  sri,
  python,
  java,
  constellation,
  ultra,
  matlab,
  vhdl,
  clang,
  cpp,
  assembly,
  car,
  mips,
  baseball,
  bank,
  imagine,
  checkers
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
    title: "Embedded Systems Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "C++",
    icon: cpp,
  },
  {
    name: "C",
    icon: clang,
  },
  {
    name: "VHDL/Verilog",
    icon: vhdl,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "React JS",
    icon: reactjs,
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
    name: "git",
    icon: git,
  },
  {
    name: "Matlab",
    icon: matlab,
  },
];

const experiences = [
  {
    title: "Software Engineer Intern",
    company_name: "SRI International",
    icon: sri,
    iconBg: "#383E56",
    date: "May 2019 - Aug 2019",
    points: [
      "Collaborated with the team lead to change an application’s architecture from 32-bit to 64-bit.",
      "Worked within Linux and Visual Studio to build and link supporting libraries to existing projects.",
      "Rehosted existing C/C++ software into latest Windows IDE.",
      "Participated in code reviews and recieved and provided constructive feedback to/from other developers.",
    ],
    url: "https://www.sri.com/"
  },
  {
    title: "Robotic Process Automation Intern",
    company_name: "Constellation Brands",
    icon: constellation,
    iconBg: "#E6DEDD",
    date: "May 2020 - Dec 2020",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participated in code reviews and recieved and provided constructive feedback to/from other developers..",
    ],
    url: "https://www.cbrands.com/"
  },
  {
    title: "Software Engineer Intern",
    company_name: "Ultra Electronics",
    icon: ultra,
    iconBg: "#383E56",
    date: "May 2022 - Aug 2022",
    points: [
      "Developed a C++ command line user interface application that received a stream of packet data from a socket, parsed it, and extracted desired packets determined from the user arguments.",
      "Self-led the implementation of a soft-core processor swap in a FPGA.",
      "The implementation included reconfiguring the constraint file and upgrading the FPGA’s design to properly link the processor with its appropriate peripherals.",
      "Participated in code reviews and recieved and provided constructive feedback to/from other developers.",
    ],
    url: "https://www.ultra.group/us/"
  },
];

const testimonials = [
  {
    testimonial:
      "Mr. Lewis was eager to take on tasks in areas he was unfamiliar.",
    name: "Michael Kiernan",
    designation: "Principal Systems Engineer",
    company: "SRI International",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Chase is able to quickly pick up and run with an idea once shown the correct path.",
    name: "Lynn Edmunds",
    designation: "Software Functional Manager",
    company: "Ultra Electronics",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    testimonial:
      "Chase does a great job of completing anything that is assigned to him. He also wasn't afraid to ask for work, which was great. He took initiative and wasn't intimidated by new tools or the changing business environment.",
    name: "Josh Brundage",
    designation: "Manager Financial Systems (RPA)",
    company: "Constellation Brands",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  
];

const projects = [
  {
    name: "Self-Driving Car",
    description:
      "Given a car attached with 2 DC motors, 1 servo motor, a line-scan camera, and a MSP432 microcontroller, various peripherals were used to control the different hardware on the car to drive around a track.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "I2C",
        color: "green-text-gradient",
      },
      {
        name: "PWM",
        color: "pink-text-gradient",
      },
    ],
    image: car,
    source_code_link: "https://github.com/",
  },
  {
    name: "Baseball Swing Analyzer",
    description:
      "A system was designed to recognize the beginning of a batter’s loading phase and initialization of their rotational sequence so that it can record the player’s biomechanics throughout their entire swing.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Python",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
    ],
    image: baseball,
    source_code_link: "https://github.com/",
  },
  {
    name: "Air Purfication System",
    description:
      "The Purification Station is  a high-efficiency automated air filtration machine powered on a Bluetooth device. With its powerful fan and hospital-grade air filters, 99.97% of particles from the air.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "Arduino",
        color: "green-text-gradient",
      },
    ],
    image: imagine,
    source_code_link: "https://github.com/",
  },
  {
    name: "Bank Simulation",
    description:
      "Simulated a banking environment using FreeRTOS on the Nucleo STM32l476 board. Using tasks and a queue, customers were populated/depopulated in a queue and serviced by bank tellers as tasks/threads",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "RTOS",
        color: "green-text-gradient",
      },
    ],
    image: bank,
    source_code_link: "https://github.com/",
  },
  {
    name: "WebCheckers",
    description:
      "An online Checkers game system built in Java 8 and Spark. The application runs locally and anybody connected locally could play against each other.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "Spark",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: checkers,
    source_code_link: "https://github.com/cjl4945/Web-Checkers/tree/master/webcheckers",
  },
];

export { services, technologies, experiences, testimonials, projects };