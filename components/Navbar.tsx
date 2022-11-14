import React, {useEffect, useState} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";

interface Props{
    activeItem:string,
    setActiveItem:Function,
    name:string,
    route:string
}

const NavItem=({activeItem,setActiveItem,name,route}:Props)=>{
    return(
        activeItem !==name ?(
            <Link href={route}>
                <span onClick={()=>setActiveItem(name)} className='hover:text-green'>{name}</span>
            </Link>
        ):null
    )
}

const Navbar = () => {
    const [activeItem, setActiveItem] = useState<string>('');
    const {pathname}=useRouter()
    useEffect(()=>{
        if (pathname==='/')setActiveItem('简介')
        if (pathname==='/projects')setActiveItem('项目')
        if (pathname==='/resume')setActiveItem('简历')
        }
     );

    return (
        <div className='flex justify-between px-5 py-3 my-3'>
            <span className='font-bold text-xl border-b-4 text-green border-green md:text-2xl'>{activeItem}</span>
            <div className='flex space-x-5  text-lg'>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='简介' route='/'/>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='项目' route='/projects'/>
                <NavItem activeItem={activeItem} setActiveItem={setActiveItem} name='简历' route='/resume'/>
            </div>

        </div>
    );
};

export default Navbar;
