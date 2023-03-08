import adminSideBarData from '@/data/adminSideBarData';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'

interface Props{
    toggle:boolean;
}

const AdminSideBar = ({toggle}:Props) => {
    const router =useRouter();
  return (
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
                        <Link key={index} href={data.link}>
                            <li className={`p-2 px-5 ${router.asPath== data.link ? "bg-purple-700" : ""}
                            hover:bg-purple-700 flex gap-2 items-center `}>
                                <span>{data?.icon}</span>
                                {!toggle && 
                                <span>{data.title}</span>
                                }
                            </li>
                        </Link>
                    )
                })
                }
            </ul>
        </div>
    </div>
  )
}



export default AdminSideBar
