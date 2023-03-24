import React from 'react'
import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import { useState } from 'react';
import Link from 'next/link';
import personalDataInfo from '@/data/personalData';
import { useRouter } from 'next/router';

interface Props{
    toggle:boolean;
    setToggle:React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({toggle,setToggle}:Props) => {
    const [show,setShow]= useState<Boolean>(false);
    const displayDiv=()=>setShow((show)=> !show);

    const router= useRouter();
  return (
    <div
    className={`fixed p-5 bg-white top-0 ${toggle ? "pl-[5rem]" : "pl-[5rem]"} text-blac
     shadow-md flex justify-between left-0 right-0`}>
        <div className={`${!toggle ? "ml-36" : "ml-1"}`}>
            <span onClick={()=>setToggle((t)=>!t)}>
                <BsList size={25}/>
            </span>
        </div>
        <div className='flex gap-3 items-center'>
            <span>Sabita</span>
            <span className=' text-slate-700' onClick={()=>displayDiv()}>
                <BiUserCircle size={27}/>
            </span>
            {
                show && 
                <div className='flex flex-col w-[80%] p-5 rounded-md z-50 border border-slate-200 shadow-lg '>
                        <ul>
                        {
                            personalDataInfo.map((data,i)=>{
                                return(
                                    <>
                                    <Link href={data?.link || '#'} key={i}>
                                        <li className={` ${router.asPath == data.link } flex gap-4 p-1.5 items-center`}>
                                            <span>{data.icon}</span>
                                            <span>{data.name}</span>
                                        </li>
                                    </Link>
                                   </>      
                                )
                            })
                        }
                        </ul>
                </div>
            }
        </div>
    </div>
  )
}

export default Navbar
