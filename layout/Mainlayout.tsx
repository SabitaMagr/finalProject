import Footer from '@/components/Front Page/Footer';
import Head from 'next/head';
import React, { useState } from 'react'
import FrontenedNavaBar from './FrontenedNavaBar';
import SideBar from './SideBar';

interface Props {
  title?: string;
  children?: React.ReactNode;
}

const Mainlayout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title || 'finalProject'}</title>
        <link rel="stylesheet" href="" />
      </Head>
      <main className='w-full'>
        <FrontenedNavaBar />
        <div className='pt-16'>
          {children}
        </div>
        <Footer />
      </main>
    </>
  )
}

export default Mainlayout
