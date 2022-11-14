import React from 'react';
import Image from "next/image";
import { FaReact } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { FaWeixin } from "react-icons/fa";
import { SiTencentqq } from "react-icons/si";
import { GiPositionMarker } from "react-icons/gi";
import {useTheme} from "next-themes"

const Sidebar = () => {
    const {theme,setTheme}=useTheme()
    const changeTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };
    return (
        // 个人介绍
        <>
            <Image
                src='https://i.pinimg.com/564x/d6/7c/42/d67c42517cfcf967a3307d9b167b3cfa.jpg'
                alt='666'
                width={300}
                height={100}
                className='mx-auto rounded-full'
                loading="lazy"
            />
            <h3 className='my-4 text-3xl font-medium tracking-wider'>
                包启明
            </h3>
            <p className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500'>
                <FaReact/>前端开发工程师
            </p>
            {/*简历*/}
            <a href='/images/blink.jpg' download='blink.jpg' className='flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500'>
                <FiUser/>个人简历
            </a>
            <div className='-ml-4 -mr-4 py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500'>
                <div className='flex items-center justify-center space-x-2'>
                    <GiPositionMarker/>
                    <span>江西,吉安</span>
                </div>
                {/*联系方式*/}
                <p>邮箱：2829115644@qq.com</p>
                <p>手机号：18146626629</p>
            </div>

            {/*<div className='flex justify-around '>*/}
            {/*    <SiTencentqq size={30} className='text-blue-400'/>*/}
            {/*    <FaWeixin size={30} className=' text-green-400'/>*/}
            {/*</div>*/}
            <button onClick={()=>window.open('mailto:2829115644@qq.com')} className='lc bg-gradient-to-r from-blue-400 to-green-400 w-8/12 rounded-full py-2 px-5 text-white my-2 py-2'>我的邮箱</button>
            <button onClick={changeTheme} className='lc bg-gradient-to-r from-blue-400 to-green-400 w-8/12 rounded-full py-2 px-5 text-white my-4 py-2'>主题切换</button>
        </>
    );
};

export default Sidebar;
