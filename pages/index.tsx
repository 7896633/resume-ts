import type {GetServerSideProps, GetServerSidePropsContext, } from 'next'
import Head from 'next/head'
import {services} from "../data";
import Image from 'next/image'
import ServiceCard from "../components/ServiceCard";
import {motion} from 'framer-motion'
import {fadeInUp, routeAnimation, stagger} from '../animations'

type Data={
    endpoint:string
}

const Home= ({endpoint}:Data) => {
    console.log(endpoint)
  return (
    <motion.div
        animate='animate'
        initial='initial'
        variants={routeAnimation}
        exit='exit'
        className='flex flex-col px-6 pt-1 flex-grow'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <p className='my-3 font-medium'>
            拥有一年以上前端开发经验,正在完善前端基础和学习有关web3的知识
        </p>
        <div className='p-4 mt-5 bg-gray-400 -ml-6 -mr-6 flex-grow dark:bg-dark-100'>
            <h6 className='my-3 text-xl font-bold tracking-wide '>我能够</h6>
            <motion.div
                className='grid gap-6 md:grid-cols-2 my-3 '
                variants={stagger}
                animate='animate'
                initial='initial'
            >
                {
                    services.map(service=>(
                        <motion.div
                            variants={fadeInUp}
                            className='col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 lg:col-span-1 '
                            key={service.title}>
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
    // console.log(process.env.VERCEL_URL)
    // const res=await fetch(`${process.env.VERCEL_URL}/api/services`)
    // const data=await res.json()
    // console.log(services)
    return {
        props: {endpoint:process.env.VERCEL_URL},
    }
}
//
// export const getStaticProps=async (context:GetServerSidePropsContext)=>{
//     const res=await fetch('http://localhost:3000/api/services')
//     const data=await res.json()
//     console.log(services)
//     return {
//         props: {service:data.service,}, // will be passed to the page component as props
//     }
// }

