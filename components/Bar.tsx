import {FunctionComponent } from 'react'
import {Skill} from "../type";
import {motion} from 'framer-motion'

const Bar:FunctionComponent<{data:Skill}> = ({data:{Icon,level,name}}) => {
    const bar_width=`${level}%`
    const variants={
        initial:{
            width:0
        },
        animate:{
            width: bar_width,
            transition:{
                duration:0.4,
                type:"spring",
                damping:10,
                stiffness:100,
            },
        }
    }
    return (
        <div className='my-2 text-white bg-gray-300 rounded-full dark:bg-dark-300 dark:bg-black-500'>
            <motion.div
                initial='initial'
                animate='animate'
                variants={variants}
                style={{width:bar_width}}
                className='px-4 py-1 flex items-center rounded-full bg-gradient-to-r from-green to-blue-400'
            >
                <Icon className='mr-3'/>
                {name}
            </motion.div>
        </div>
    );
};

export default Bar;
