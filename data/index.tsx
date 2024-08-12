import { link } from "fs"
import { title } from "process"
import gmail from '@/public/gmail.svg'


export const gridItems = [
  {
    id: 1,
    title: "My Tech Stack",
    description: "I constantly try to improve",
    className: "lg:col-span-3 md:col-span-6 md:row-span-3 lg:min-h-[40vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "w-full h-full",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My Social Media ",
    description: "Get in touch with me by",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 5,
    title: "Currently Learning New Programming Language & Updating My Porto",
    description: "The inside scoop",
    className: "md:col-span-3 md:row-span-1",
    imgClassName: "absolute right-0 top-5 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
]

export const socialMedia = [
  {
    id: 1,
    title: "Instagram",
    url: "https://www.instagram.com/elizabethdevasafira_/",
    icon: "/instagram.svg",
  },
  {
    id: 2,
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/deva-safira/",
    icon: "/linkedin.svg",
  },
  {
    id: 3,
    title: "Gmail",
    url: "mailto:elizabethdevasafira@gmail.com",
    icon: "/gmail.svg",
  },
  {
    id: 4,
    title: "Github",
    url: "https://github.com/devasafira",
    icon: "/github.svg",
  },
]

export const projectExperience = [
  {
    id: 1,
    title: "Biiio Studio",
    descriptions: [
      {
        id: 1,
        desc: "Collaborate with team to design, build, and implement advanced Content Management Systems (CMS) that are specialized to the needs of our clients and prioritizing performance",
      },
      {
        id: 2,
        desc: "Transform Figma design prototypes into high-quality, responsive, interactive web applications. Ensure that designs are accurately and efficiently transformed into code, while retaining visual consistency and usability.",
      },
      {
        id: 3,
        desc: "Use my knowledge of front-end and back-end technologies to create web applications. Implement and integrate APIs, manage databases, and guarantee that data flows and user interactions are seamless.",
      },

    ],
    position: "Fullstack Developer",
    techs: [
      { id: 1, name: "Laravel", icon: "",},
      { id: 2, name: "Tailwind", icon: "/tail.svg"},
      { id: 3, name: "Typescript", icon: "/ts.svg"},
      { id: 4, name: "CSS", icon: "/css.svg"},
      { id: 5, name: "PHP", icon: ""},
      { id: 6, name: "MySQL", icon: "/mysql.png"},
    ],
    url: "https://biiiostudio.com/",
    image: "/biiio-studio.png",
  },
  {
    id: 2,
    title: "Design By Melz",
    descriptions: [
      {
        id: 1,
        desc: "Use HTML, CSS, Tailwind, and Typescript to transform home page design prototypes created with tools such as Figma into responsive, dynamic web pages.",
      },
      {
        id: 2,
        desc: "Collaborate with designers and project managers to understand needs and provide high-quality front-end solutions.",
      },
    ],
    position: "Front-end Developer",
    techs: [
      { id: 1, name: "NextJs", icon: "/next.svg",},
      { id: 2, name: "Tailwind", icon: "/tail.svg",},
      { id: 3, name: "Typescript", icon: "/ts.svg",},
      { id: 4, name: "CSS", icon: "/css.svg",},
    ],
    url: "https://designbymelz.renara.biz.id/",
    image: "/design-by-melz.png",
  },
  {
    id: 3,
    title: "Kemah Beth Shalom",
    descriptions: [
      {
        id: 1,
        desc: "Transform Figma design prototypes into high-quality, responsive, interactive web applications. Ensure that designs are accurately and efficiently transformed into code, while retaining visual consistency and usability.",
      },
      {
        id: 2,
        desc: "Collaborate with project managers to define requirements, establish milestones, and deliver high-quality solutions on schedule.",
      },
    ],
    position: "Front-end Developer",
    techs: [
      { id: 1, name: "Laravel", icon: "",},
      { id: 2, name: "NuxtJs", icon: "",},
      { id: 3, name: "VueJs", icon: "",},
      { id: 4, name: "MySQL", icon: "/mysql.png",},
      { id: 5, name: "PHP", icon: "",},
      { id: 6, name: "Tailwind", icon: "/tail.svg",},
      { id: 7, name: "CSS", icon: "",},
    ],
    url: "https://kemahbethshalom.renara.biz.id/",
    image: "/kemah-beth-shalom.png",
  },
]