import Head from 'next/head';
import React, { useState } from 'react'
import Navbar from './Navbar';
import SideBar from './SideBar';

interface Props{
    title?:string;
    children?:React.ReactNode;
}

const Mainlayout = ({title,children}:Props) => {
  const [toggle,setToggle] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>{title || 'finalProject'}</title>
        <link rel="stylesheet" href="" />
      </Head>
      <main className='w-full'>
        <SideBar/>
        {/* <div className={`${!toggle ? "md:ml-[11rem] lg:ml-[14rem] xl:ml-[16rem] 2xl:ml-[21rem]" : "ml-[5rem]"}`}> */}
        {/* </div> */}
      </main>
    </>
  )
}

export default Mainlayout
