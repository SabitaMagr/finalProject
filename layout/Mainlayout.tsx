import Head from 'next/head';
import React from 'react'
import SideBar from './SideBar';

interface Props{
    title?:string;
    children?:string;
}

const Mainlayout = ({title,children}:Props) => {
  return (
    <>
      <Head>
        <title>{title || 'finalProject'}</title>
        <link rel="stylesheet" href="" />
      </Head>
      <main className=''>
        <SideBar/>
      </main>
    </>
  )
}

export default Mainlayout
