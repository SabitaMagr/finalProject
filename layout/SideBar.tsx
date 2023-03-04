import sideBarData from '@/data/sideBarData'
import Link from 'next/link'
import React from 'react'


const SideBar = () => {
  return (
    <div className=' h-[9%] text-center text-white z-50  bg-purple-600 fixed inset-0'>
        <div className='flex mt-2 npm run dev gap-60'>
            <ul className='w-[20%] ml-5'>
                <li className=' font-bold text-lg mt-2  hover:text-yellow-400 '>Cristiano Restaurant</li>
            </ul>
            <ul className=' flex gap-10 ml-20 font-bold'>
                {
                    sideBarData.map((data,i)=>{
                        return(
                            <Link key={i} href={data?.link}>
                                <span></span>
                                <li className='p-2 flex gap-2  hover:text-yellow-400'>
                                    <span>{data?.icon}</span>
                                    <span>
                                        {data?.title}
                                    </span>
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

export default SideBar
