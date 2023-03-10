import { spawn } from 'child_process';
import Link from 'next/link';
import { title } from 'process';
import React from 'react'

interface Props{
  children:React.ReactNode;
  breadCrumb?:{
    title:string;
    link:string;
  }[];
}
const Container = ({children,breadCrumb}:Props) => {
  return (
    <div>
      <div className='p-3 '>
        <span className='flex gap-2'>
          {breadCrumb?.map((data,index)=>{
            return(
              <Link href={data?.link as string} className="flex gap-3 text-sm">
                <span>{data?.title}</span>
                {index+1!=breadCrumb.length && <span>{">"}</span> }
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
