import type {GetServerSideProps, GetServerSidePropsContext, } from 'next'
import Head from 'next/head'
import {services} from "../data";
import Image from 'next/image'
import ServiceCard from "../components/ServiceCard";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation, stagger} from '../animations'

// 简介页面
const Home= ({endpoint}:any) => {
    console.log(endpoint)
  return (
    <motion.div
        animate='animate'
        initial='initial'
        variants={routeAnimation}
        exit='exit'
        className='flex flex-col px-6 pt-1 flex-grow'>
      <Head>
        <title>简介</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <p className='my-3 font-medium'>
            拥有一年以上前端开发经验,正在完善前端基础和提升能力
        </p>
        <div className='p-4 mt-5 bg-gray-400 -ml-6 -mr-6 flex-grow dark:bg-dark-100'>
            <h6 className='my-3 text-xl font-bold tracking-wide '>我能够</h6>
            <motion.div
                className='grid gap-6 md:grid-cols-2 my-3 '
                variants={stagger}
                animate='animate'
                initial='initial'
            >

                {/*技术展示*/}
                {
                    services.map(service=>(
                        <motion.div
                            variants={fadeInUp}
                            className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 '
                            key={service.title}>
                            {/*分项*/}
                            <ServiceCard service={service}/>
                        </motion.div>
                    ))
                }
            </motion.div>
        </div>
    </motion.div>
  )
}

export default Home

export const getServerSideProps:GetServerSideProps=async (context:GetServerSidePropsContext)=>{
    return {
        props: {endpoint:process.env.VERCEL_URL},
    }
}

