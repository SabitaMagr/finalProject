import adminSideBarData, { SideBarInterface } from '@/data/adminSideBarData';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/router';
import React from 'react'
import { MdKeyboardArrowDown, MdKeyboardArrowRight } from 'react-icons/md';

interface Props {
    toggle: boolean;
}

const AdminSideBar = ({ toggle }: Props) => {
    const router = useRouter();
    return (
        <>
            <div className={`min-h-screen text-white z-50
    ${toggle ? "w-[5%] pt-16" : "w-[16%]"} bg-[#2798f2] fixed inset-0`}>
                <div className='flex justify-center'>
                    {
                        !toggle && (
                            <h1 className='text-3xl pb-2 pt-4 font-bold text-center'>Admin</h1>
                        )}
                </div>
                <div className='mt-2'>
                    <ul className=''>
                        {adminSideBarData.map((data, index) => {
                            return (
                                <>
                                    {
                                        !data?.children ?
                                            <Link key={index} href={data?.link || '#'}>

                                                <li className={`p-2 font-bold px-3 ${router.asPath == data.link ? "bg-[#078df7]" : ""}
                                                 hover:bg-[#078df7] flex gap-4 items-center `}>
                                                    <span>{data?.icon}</span>
                                                    {!toggle &&
                                                        <span className='text-sm'>{data.title}

                                                        </span>
                                                    }
                                                </li>
                                            </Link>

                                            :
                                            <Children toggle={toggle} data={data} />

                                    }
                                </>
                            )
                        })
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default AdminSideBar

const Children = ({ data, toggle }: { data: SideBarInterface, toggle: boolean }) => {
    const [state, setState] = useState<boolean>(false);
    const router = useRouter();
    return (
        <li className=' text-sm'>
            <span onClick={() => setState(s => !s)} className='hover:bg-[#078df7] font-bold p-2 px-3 flex justify-between items-center'>
                <span className='flex gap-4'>
                    <span>{data?.icon}</span>
                    {!toggle &&
                        <span>{data?.title}</span>
                    }
                </span>
                <span>
                    {
                        !toggle && (!state ?
                            <MdKeyboardArrowRight />
                            :
                            <MdKeyboardArrowDown />)
                    }
                </span>

            </span>
            {
                state && !toggle && data?.children &&
                <span className='block '>
                    {
                        data?.children?.map((child, i) => {
                            return (
                                <Link key={i} href={child?.link || '#'}>
                                    <span className=' hover:bg-[#0687f0] pl-10 py-1 flex items-center gap-3'>
                                        <span>{child.icon}</span>
                                        <span>{child?.title}</span>
                                    </span></Link>
                            )
                        })
                    }
                </span>
            }

        </li>
    )
}
