import React from 'react'
import Head from "next/head"
import { useState } from "react";
import AdminSideBar from './AdminSideBar';
import Navbar from './Navbar';


interface Props{
    title?: string;
    children?:React.ReactNode;
}

const AdminMainLayout = ({title,children}:Props) => {
    const [toggle,setToggle] =useState<boolean>(false);
  return (
    <>
        <Head>
            <title>{title || "demo"}</title>
            <link rel="stylesheet" href="" />
        </Head>
        <main className='w-full'>
            <AdminSideBar toggle={toggle}/>
            <div className={`${!toggle ? "md:ml-[11rem] lg:ml-[14rem] xl:ml-[13.5rem] 2xl:ml-[21rem]" : "ml-[5rem]"}`}>
                <Navbar setToggle={setToggle} toggle={toggle}/>
                <div className='pt-16'>{children}</div>
            </div>
        </main>
    </>
  )
}

export default AdminMainLayout
