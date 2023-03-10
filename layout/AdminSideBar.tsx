import adminSideBarData from '@/data/adminSideBarData';
import Link from 'next/link';
import {useState} from 'react';
import { Router, useRouter } from 'next/router';
import React from 'react'
import index from '@/pages/food';

interface Props{
    toggle:boolean;
}

const AdminSideBar = ({toggle}:Props) => {
    const [togggleBtn,setToggleBtn] =useState<boolean>(false);
    const router =useRouter();
  return (
    <>
    <div className={`min-h-screen text-white z-50
    ${toggle ? "w-[5%] pt-16" :"w-[15%]"} bg-purple-600 fixed inset-0`}>
        <div className='flex justify-center'>
            {
                !toggle && (
                    <h1 className='text-3xl pb-2 pt-4 font-bold text-center'>Admin</h1>
            )}
        </div>
        <div className='mt-2'>
            <ul className=''>
                {adminSideBarData.map((data,index)=>{
                    return(
                           <Link key={index} href={data?.link ||'#' }>
                           
                           {
                             !data?.children? 
                            <li className={`p-2 px-5 ${router.asPath== data.link ? "bg-purple-700" : ""}
                            hover:bg-purple-700 flex gap-2 items-center `}>
                                <span>{data?.icon}</span>
                                {!toggle && 
                                <span>{data.title}
                                    
                                </span>
                                }
                            </li>
                            :
                            <li className={`p-2 px-5 ${router.asPath== data.link ? "bg-purple-700" : ""}
                            hover:bg-purple-700 flex gap-2 items-center `}>
                                <span>{data?.icon}</span>
                                {!toggle && 
                                <span onClick={()=>setToggleBtn(s=>!s)} >{data.title}
                                    </span>}
                                {!togggleBtn?
                                ''
                                 :
                                 <span className='flex flex-col'>
                                 <Children children={data?.children}/>
                                 </span>
                                }
                            </li>
                            
                           }
                            </Link>
                 )
                })
                }
            </ul>
        </div>
    </div>
    </>
  )
}

export default AdminSideBar
interface childrenProps{
    children?:{
    title:string;
    link:string;
    }[];
}
const Children =({children}:childrenProps) =>{
    const [state,setState] =useState<boolean>(false);
    const router =useRouter();
    return(
        <>
        
        { children?.map((data,i)=>{
            return(
                    <li  className={` block ${router.asPath== data.link ? "bg-purple-700" : ""}`}>
                        {!state && 
                                <span  className='block'>{data.title}</span>
                        }
                    </li>
            )
        })
        }        
      </>
    )
}
