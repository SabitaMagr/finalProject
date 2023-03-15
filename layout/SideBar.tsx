import sideBarData from '@/data/sideBarData'
import Link from 'next/link'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
const SideBar = () => {
    return (
        <div className=' relative min-h-screen text-center border text-black z-50 !bg-no-repeat !bg-cover !bg-black'
            style={{ background: 'url(/images/dashboardbg.avif)' }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-60 ' />
            <div className='fixed flex z-[999999] left-0 right-0 bg-white  bg-opacity-60'>
                <div className='w-[3%] ml-7 bg-white rounded-full '>
                    <FiPhoneCall size={25} className='m-2' />
                </div>
                <div className='flex flex-col  p-2'>
                    <span className='text-sm'>Order Now !</span>
                    <span className=' font-semibold'>012 345 678</span>
                </div>
                <ul className=' flex ml-[30rem] items-center gap-20 font-bold'>
                    {
                        sideBarData.map((data, i) => {
                            return (
                                <Link key={i} href={data?.link as string}>
                                    <li className='p-2 hover:rounded-md hover:transition-all hover:ease-in-out hover:duration-[2s] justify-between items-center flex gap-2  hover:bg-black  hover:text-white'>
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
            <div className='flex absolute justify-center  items-center border  inset-0'>
                <h1 className=' text-center mx-auto  bg-red-700   p-20 font-extrabold text-2xl rounded-full'>Burger Cafe </h1>
            </div>
        </div>
    )
}

export default SideBar
