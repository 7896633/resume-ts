import { FunctionComponent, useState } from "react";
import {  AiFillProject } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Project } from "../type";
import {motion} from 'framer-motion'
import Image from "next/image";
import {fadeInUp, stagger} from "../animations";

const ProjectCard: FunctionComponent<{
    project: Project;
    showDetail:null|number,
    setShowDetail:(id:null|number)=>void
}> = ({
          project: {
              name,
              image_path,
              category,
              deployed_url,
              description,
              key_techs,
              id
          },
                             showDetail,
                             setShowDetail,
      }) => {
    // const [showDetail, setShowDetail] = useState(false);

    return (
        <div>
            {/*点击显示对应id*/}
            <Image
                src={image_path}
                alt={name}
                className="cursor-pointer"
                onClick={() => setShowDetail(id)}
                layout="responsive"
                height="150"
                width="300"
            />

            <p className="my-2 text-center">{name}</p>

            {/*判断点击后显示扩展内容*/}
            {showDetail === id && (
                <div className="absolute top-0 left-0 z-10 grid w-full h-auto p-2 md:p-10 rounded-lg text-black bg-gray-100 md:grid-cols-2 gap-x-12 dark:text-white dark:bg-dark-100">
                    <motion.div
                        variants={stagger}
                        animate='animate'
                        initial='initial'
                    >
                        <motion.div
                            variants={fadeInUp}
                            className='border-gray-100 border-2'
                        >
                            <Image
                                src={image_path}
                                alt={name}
                                layout="responsive"
                                height="150"
                                width="300"
                            />
                        </motion.div>
                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center my-4 space-x-3">

                            <a
                                href={deployed_url}
                                className="flex items-center px-4 py-2 space-x-3 text-lg bg-gray-200 dark:bg-dark-200"
                            >
                                <AiFillProject /> <span>查看项目</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        variants={stagger}
                        animate='animate'
                        initial='initial'
                    >
                        <motion.h2 variants={fadeInUp} className="mb-3 text-xl font-medium md:text-2xl">{name}</motion.h2>
                        <motion.h3 variants={fadeInUp} className="mb-3 font-medium">{description}</motion.h3>

                        <motion.div variants={fadeInUp} className="flex flex-wrap mt-5 space-x-2 text-sm tracking-wider">
                            {key_techs.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounde-sm"
                                >
                  {tech}
                </span>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/*点击变为null，id变无则不显示*/}
                    <button
                        onClick={() => setShowDetail(null)}
                        className="absolute p-1 bg-gray-200 rounded-full top-3 right-3 focus:outline-none dark:bg-dark-200"
                    >
                        <MdClose size={30} />
                    </button>
                </div>
            )}
        </div>
    );
};

export default ProjectCard;