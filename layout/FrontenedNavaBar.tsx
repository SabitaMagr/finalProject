import sideBarData from '@/data/sideBarData'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";
import { FiPhoneCall } from 'react-icons/fi'


const FrontenedNavaBar = () => {
    const router = useRouter();
    return (
        <div>
            <div className='fixed flex z-50   text-white left-0 right-0 bg-black border  bg-opacity-70'>
                <div className='w-[3%] ml-7 m-2  bg-white rounded-full '>
                    <FiPhoneCall size={25} className='m-2 text-black' />
                </div>
                <div className='flex flex-col  p-2'>
                    <span className='text-sm'>Order Now !</span>
                    <span className=' font-semibold'>012 345 678</span>
                </div>
                <ul className=' flex ml-[30rem] m-2 items-center gap-16 font-bold'>
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
                    <span onClick={() => router.push('/order/cart')}>
                        <FaCartArrowDown size={24} />
                    </span>
                    {/* <Link href={"/order/cart"} >
                    </Link> */}
                    {/* <Link href={"/order/cart"} dangerouslySetInnerHTML={{__html: '<span><FaCartArrowDown size={24} /></span>'}} /> */}

                </ul>
            </div>
        </div>
    )
}

export default FrontenedNavaBar

