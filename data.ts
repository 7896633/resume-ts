import { RiComputerLine } from "react-icons/ri";
import { DiJavascript,DiNodejsSmall } from "react-icons/di";
import { SiAdobecreativecloud,SiMongodb } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
// @ts-ignore
import { Service,Skill,Project } from "./type";
import { BsCircleFill } from "react-icons/bs";

export const services: Service[] = [
    {
        Icon: RiComputerLine,
        title: "前端基础",
        about:
            "熟练 <b>HTML</b>、<b>CSS</b>、<b>JavaScrip</b> ",
    },
    {
        Icon: TbBrandNextjs,
        title: "前端框架",
        about: "熟练 <b>Tailwind css</b>、<b>Next.js</b>",
    },
    {
        Icon: DiJavascript,
        title: "JavaScrip库",
        about:
            "熟练 <b>Recoil</b>、<b>Axios</b>、<b>React</b>",
    },
    {
        Icon: DiNodejsSmall,
        title: "后端开发",
        about:
            "了解 <b>Node.js</b>、<b>Express</b>",
    },
    {
        Icon: SiAdobecreativecloud,
        title: "Ui/Ux",
        about:
            "熟练 <b>Ai</b> 、 <b>Ps</b>、<b>Figma</b>",
    },

    {
        Icon: SiMongodb,
        title: "数据库",
        about: "了解 <b>MongoDB</b>、<b>Firebase</b>",
    },
];

export const languages: Skill[] = [
    {
        Icon: BsCircleFill,
        name: "Node.js",
        level: "40",
    },
    {
        Icon: BsCircleFill,
        name: "ES6",
        level: "70",
    },
    {
        Icon: BsCircleFill,
        name: "React.js",
        level: "60",
    },
    {
        Icon: BsCircleFill,
        name: "CSS3",
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
        level: "75",
    },
    {
        Icon: BsCircleFill,
        name: "Photoshop",
        level: "85",
    },
    {
        Icon: BsCircleFill,
        name: "Illustrator",
        level: "55",
    },
    {
        Icon: BsCircleFill,
        name: "Figma",
        level: "65",
    },
];
export const projects: Project[] = [
    {
        id:1,
        name: "企业网站",
        image_path: "/images/football.png",
        deployed_url: "https://o-my-goal.web.app/",
        category: ["react"],
        description:
            "o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ",
        key_techs: ["React", "Redux", "Firebase Auth", "API", "Sass", "Bootstrap"],
    },
    {
        id:2,
        name: "房产系统",
        image_path: "/images/Snipaste_2022-12-09_15-40-48.png",
        deployed_url: "https://house-7896633.vercel.app/",
        category: [ "react"],
        description:
            "忘记密码，资料编辑，列表创建，轮播图展示",
        key_techs: ["React", "tailwindcss","firebase"],
    },
    {
        id:3,
        name: "MERN",
        image_path: "/images/color.jpg",
        deployed_url: "!#",
        category: ["node.js"],
        description:
            "实时通讯",
        key_techs: ["Express", "MongoDB", "Node","react"],
    },
    {
        id:4,
        name: "文章发布",
        image_path: "/images/Snipaste_2022-11-28_08-10-08.png",
        deployed_url: "https://issue-7896633.vercel.app/",
        category: ["next.js"],
        description:
            "实现文章发布功能:发布和查看功能",
        key_techs: ["firebase", "Next js","tailwindcss"],
    },
    {
        id:5,
        name: "视频播放",
        image_path: "/images/Snipaste_2022-12-03_07-59-44.png",
        deployed_url: "https://video-7896633.vercel.app/",
        category: [ "next.js"],
        description:
            "实现注册登录和收藏功能",
        key_techs: ["React", "firebase","tailwindcss"],
    },
    {
        id:6,
        name: "音乐播放",
        image_path: "/images/Snipaste_2022-12-02_09-57-12.png",
        deployed_url: "https://music-7896633.vercel.app/",
        category: [ "next.js"],
        description:
            "音乐查找与播放功能",
        key_techs: [
            "Next js", "Next auth","tailwindcss","spotify"
        ],
    },
    {
        id:7,
        name: "商城",
        image_path: "/images/Snipaste_2022-12-03_08-01-26.png",
        deployed_url: "https://shop-7896633.vercel.app/",
        category: ["react"],
        description:
            '实现商品展示和购物车功能',
        key_techs: [
            "React", "Redux",
        ],
    },

    {
        id:8,
        name: "评论功能",
        description: "实现评论功能:删除和点赞功能",
        image_path: "/images/Snipaste_2022-11-28_08-01-04.png",
        deployed_url: "https://comment-7896633.vercel.app",
        category: ["next.js"],
        key_techs: ["firebase", "Next js", "Next auth","tailwindcss"],
    },
];