import React from 'react';
import {languages,tools} from "../data";
import Bar from "../components/Bar";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation} from '../animations'
import Head from "next/head";


// 简历页面
const resume = () => {
    return (
        <motion.div
            animate='animate'
            initial='initial'
            variants={routeAnimation}
            exit='exit'
            className='px-6 py-2'
        >
            <Head>
                <title>简历</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className='grid gap-6 md:grid-cols-2'>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-xl font-bold'>教育经历：</h5>
                    <div >
                        <h5 className='my-2 font-semibold'>专业：动漫游戏设计</h5>
                        <p className='font-semibold'>学校：江西新华电脑学院(2017-2020)</p>
                        <p className='my-3'>工作经历：由平面设计转Ui设计</p>
                    </div>
                </motion.div>
                <motion.div variants={fadeInUp} initial='initial' animate='animate'>
                    <h5 className='my-3 text-xl font-bold'>工作经验：</h5>
                    <div >
                        <h5 className='my-2 font-semibold'>岗位：前端开发工程师</h5>
                        <p className='font-semibold'>公司：东莞斯达文星(2021-至今)</p>

                    </div>
                </motion.div>
            </div>
            {/*熟练度显示*/}
            <div className='grid gap-6 md:grid-cols-2'>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        语言和框架
                    </h5>
                    {/*转为%显示*/}
                    <div className='my-2'>
                        {
                            languages.map(language=><Bar data={language} key={language.name}/>)
                        }
                    </div>
                </div>
                <div>
                    <h5 className='my-3 text-2xl font-bold'>
                        工具和软件
                    </h5>
                    <div className='my-2'>
                        {
                            tools.map(tool=><Bar data={tool} key={tool.name}/>)
                        }
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default resume;
