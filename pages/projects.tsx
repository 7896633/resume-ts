import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../type";
import {motion} from 'framer-motion'
import {stagger, fadeInUp, routeAnimation} from "../animations";

const Projects = () => {
    const [projects, setProjects] = useState(projectsData);
    const [active, setActive] = useState("全部");
    const [showDetail, setShowDetail] = useState<number | null>(null);

    const handlerFilterCategory = (category: Category | "全部") => {
        //如果点击的是all则全部返回
        if (category === "全部") {
            setProjects(projectsData);//显示全部项目
            setActive(category);// 显示all标题
            return;
        }

        // 筛选 在选projectsData筛选出category有的值
        const newArray = projectsData.filter((project) =>
            // 判断是否包含
            project.category.includes(category)
        );
        setProjects(newArray);//显示所选标题的内容
        setActive(category);//显示所选标题
    };

    return (
        <motion.div
            animate='animate'
            initial='initial'
            exit='exit'
            variants={routeAnimation}
            className="px-5 py-2 overflow-y-scroll scrollbar-thin scrollbar-thumb-sky-300  scrollbar-track-sky-100" style={{ height: "65vh" }
        }>
            <ProjectsNavbar
                handlerFilterCategory={handlerFilterCategory}
                active={active}
            />

            <motion.div
                variants={stagger}
                animate='animate'
                initial='initial'
                className="relative grid grid-cols-12 gap-4 my-3"
            >
                {projects.map((project) => (
                    <motion.div
                        variants={fadeInUp}
                        className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                        key={project.name}>
                        <ProjectCard project={project} showDetail={showDetail} setShowDetail={setShowDetail}/>
                    </motion.div>
                ))}
            </motion.div>
        </motion.div>
    );
};

export default Projects;