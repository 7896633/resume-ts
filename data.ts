import { RiComputerLine } from "react-icons/ri";
import { DiJavascript } from "react-icons/di";
import { SiSolidity,SiAdobecreativecloud,SiMongodb } from "react-icons/si";
import { IoPhonePortraitOutline } from "react-icons/io5";

// @ts-ignore
import { Service,Skill,Project } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "前端开发",
        about:
            "掌握基础：<b>HTML</b>、<b>CSS</b> 和<b>JavaScrip</b> ",
    },
    {
        Icon: DiJavascript,
        title: "JavaScrip库",
        about:
            "熟练 <b>Redux</b>、<b>Axios</b>",
    },
    {
        Icon: IoPhonePortraitOutline,
        title: "App开发",
        about:
            "了解 <b>React Native</b> 和 <b>小程序</b> ",
    },
    {
        Icon: SiSolidity,
        title: "Web3",
        about: "了解 <b>Solidity</b>",
    },
    {
        Icon: SiAdobecreativecloud,
        title: "Ui/Ux",
        about:
            "熟练 <b>Ai</b> 和 <b>Ps</b> ",
    },
    {
        Icon: SiMongodb,
        title: "在学习",
        about:
            "<b>Node Api</b>、<b>Figma</b>、<b>MERN栈</b>",
    },

];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Java",
        level: "45",
    },
    {
        Icon: BsCircleFill,
        name: "Java Script",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "React Native",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "React",
        level: "65",
    },
    {
        Icon: BsCircleFill,
        name: "Next.js",
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Tailwind CSS",
        level: "90",
    },
];

export const tools: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Premiere Pro",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "80",
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "After Effects",
        level: "70",
    },
];
export const projects: Project[] = [
    {
        id:1,
        name: "COVID Tracker",
        description:
            "This app shows a statistical view about corona virus over the world",
        image_path: "/images/covid.jpg",
        deployed_url: "https://covid-19-tracker-by-sumit.web.app/",
        github_url: "https://github.com/Dey-Sumit/covid-19-tracker",
        category: ["react"],
        key_techs: ["React", "Chart.js", "Material UI"],
    },
    {
        id:2,
        name: "Algorithm Visualizer",
        image_path: "/images/algoVisual.png",
        deployed_url: "https://visual-algorithm.web.app/",
        github_url: "https://github.com/Dey-Sumit/algorithm-visualizer",
        category: ["react"],
        description:
            "An web app which shows how an algorithm (path finding or sorting) works with cool animation",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        id:3,
        name: "Dev Talks",
        image_path: "/images/dev.jpg",
        deployed_url: "https://dev-talks.herokuapp.com/",
        github_url: "https://github.com/Dey-Sumit/Dev-talks",
        category: [ "react"],
        description:
            "Social Media app for developers who can share project,create posts,etc...",
        key_techs: [
            "React",
            "Redux",
            "Node",
            "Express",
            "Mongo",
            "REST API",
            "Bootstrap",
        ],
    },

    {
        id:4,
        name: "Realtime Chat App",
        image_path: "/images/chatapp.jpg",
        deployed_url: "https://sumit-chat.netlify.app/",
        github_url: "https://github.com/Dey-Sumit/chat-app-socket.io-react-node",
        category: [ "react"],
        description:
            "Basic Realtime Chat App where one can create a room can talk to each other",
        key_techs: ["React", "Node", "Express", "Socket", "Bootstrap"],
    },

    {
        id:5,
        name: "Tweeter Clone",
        image_path: "/images/tweetme.jpg",
        deployed_url: "http://sumaxtweetme.pythonanywhere.com/",
        github_url: "https://github.com/Dey-Sumit/tweetme",
        category: [ "react"],
        description:
            "First Django Project :) | Typical Social Media App where one can post,like ,comment etc",
        key_techs: ["React", "Django", "Django REST API"],
    },

    {
        id:6,
        name: "Color Classification using tf.js",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        github_url: "https://github.com/Dey-Sumit/color-classification",
        category: ["solidity"],
        description:
            "Tried ML with JS :) | this app classifies a color using CNN algorithm in browser",
        key_techs: ["Express", "TensorFlow.js", "Vanilla js"],
    },
    {
        id:7,
        name: "YouTube using YouTube ",
        image_path: "/images/youtubeClone.png",
        deployed_url: "https://not-utube.web.app/",
        github_url: "https://github.com/Dey-Sumit/youtube-clone-tutorial-up",
        category: ["react native"],
        description:
            'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
        key_techs: [
            "React",
            "Redux",
            "Firebase Auth",
            "YouTube API",
            "Sass",
            "Bootstrap",
        ],
    },
    {
        id:8,
        name: "Football App",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];