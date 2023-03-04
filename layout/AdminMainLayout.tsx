import React from 'react'
import Head from "next/head"
import { useState } from "react";
import AdminSideBar from './AdminSideBar';


interface Props{
    title?: string;
    children?:React.ReactDOM;
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
        </main>
    </>
  )
}

export default AdminMainLayout
