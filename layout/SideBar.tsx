import Logo from '@/components/Form/Logo'
import sideBarData from '@/data/sideBarData'
import Link from 'next/link'
import React from 'react'
const SideBar = () => {
  return (
    <div className=' relative min-h-screen text-center border text-black z-50 !bg-no-repeat !bg-cover !bg-black' 
    style={{background:'url(/images/dashboardbg.avif)'}}
    >
        <div className='absolute inset-0 bg-black bg-opacity-60 '/>
        <div className='fixed flex z-[999999] gap-[30rem] left-0 right-0 bg-white  bg-opacity-60'>
            <div className='w-[20%] ml-5'>
                <img src="/images/logo.avif" className=' w-12 p-2' alt="food" />
            </div>
            <ul className=' flex items-center gap-12 font-bold'>
                {
                    sideBarData.map((data,i)=>{
                        return(
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
        <div className=' p-20 bg-red-700 rounded-full mx-auto'>
          <h1 className=' text-center font-extrabold text-2xl'> Cafe </h1>
         </div>
        </div>
    </div>
  )
}

export default SideBar
