import Link from 'next/link';
import React from 'react'

interface Props {
  children: React.ReactNode;
  breadCrumb?: {
    title: string;
    link: string;
  }[];
}
const Container = ({ children, breadCrumb }: Props) => {
  return (
    <div className=''>
      <div className='p-3 py-5 bg-white '>
        <span className='flex gap-2 text-gray-500 '>
          {breadCrumb?.map((data, index) => {
            return (
              <Link key={index} href={data?.link as string} className="flex gap-3 text-sm">
                <span className=' text-slate-800 font-semibold '>{data?.title}</span>
                {index + 1 != breadCrumb.length && <span className=' font-semibold'>{">"}</span>}
              </Link>
            );
          })}
        </span>
        {/* <h1 className='text-2xl font-bold'>{title||"Dashboard"}</h1> */}
      </div>
      <div className='m-3'>{children}</div>
    </div>
  )
}

export default Container
