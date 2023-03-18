import sideBarData from '@/data/sideBarData'
import Link from 'next/link'
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import FrontenedNavaBar from './FrontenedNavaBar'
const SideBar = () => {
    return (<>
        {/* <div className=' relative min-h-screen text-center border text-black z-50 !bg-no-repeat !bg-cover !bg-black'
            style={{ background: 'url(/images/dashboardbg.avif)' }}
        >
            <div className='absolute inset-0 bg-black bg-opacity-60 ' /> */}
        <FrontenedNavaBar />
        {/* <div className='flex absolute justify-center  items-center border  inset-0'>
            <h1 className=' text-center mx-auto  p-20 font-extrabold text-2xl'>Online Food Ordering System</h1>
        </div>
    </div> */}
    </>
    )
}

export default SideBar
