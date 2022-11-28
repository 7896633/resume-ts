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
            "熟练 <b>Recoil</b>、<b>Axios</b>",
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
            "熟练 <b>Ai</b> 、 <b>Ps</b> 和 <b>Figma</b>",
    },
    {
        Icon: SiMongodb,
        title: "学习中",
        about:
            "<b>Node</b>、<b>MERN</b>",
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
        name: "Figma",
        level: "70",
    },
];
export const projects: Project[] = [
    {
        id:1,
        name: "评论",
        description: "实现评论功能:删除和点赞功能",
        image_path: "/images/Snipaste_2022-11-28_08-01-04.png",
        deployed_url: "https://comment-7896633.vercel.app/",
        github_url: "https://github.com/7896633/comment",
        category: ["react"],
        key_techs: ["firebase", "Next js", "Next auth"],
    },
    {
        id:2,
        name: "文章发布",
        image_path: "/images/Snipaste_2022-11-28_08-10-08.png",
        deployed_url: "https://issue-7896633.vercel.app/",
        github_url: "https://github.com/7896633/issue",
        category: ["react"],
        description:
            "实现文章发布功能:发布和查看功能",
        key_techs: ["React", "firebase", "Framer Motion"],
    },

    {
        id:3,
        name: "音乐播放",
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
        name: "实时聊天",
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
        name: "视频播放",
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
        name: "区块链支付",
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
        name: "商城",
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
        name: "企业网站",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        github_url: "https://github.com/Dey-Sumit/football-app",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
];