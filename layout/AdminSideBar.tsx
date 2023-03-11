import adminSideBarData, { SideBarInterface } from '@/data/adminSideBarData';
import Link from 'next/link';
import { useState } from 'react';
import { Router, useRouter } from 'next/router';
import React from 'react'
import index from '@/pages/food';
import { FaAccusoft, FaAddressCard } from 'react-icons/fa';

interface Props {
    toggle: boolean;
}

const AdminSideBar = ({ toggle }: Props) => {
    const [togggleBtn, setToggleBtn] = useState<boolean>(false);
    const router = useRouter();
    return (
        <>
            <div className={`min-h-screen text-white z-50
    ${toggle ? "w-[5%] pt-16" : "w-[15%]"} bg-purple-600 fixed inset-0`}>
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

                                                <li className={`p-2 px-5 ${router.asPath == data.link ? "bg-purple-700" : ""}
                                                 hover:bg-purple-700 flex gap-2 items-center `}>
                                                    <span>{data?.icon}</span>
                                                    {!toggle &&
                                                        <span>{data.title}

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
        <li className=''>
            <span onClick={() => setState(s => !s)} className='hover:bg-purple-700 p-2 px-5 flex gap-2 items-center'>
                <span>{data?.icon}</span>
                {!toggle &&
                    <span>{data?.title}</span>
                }
            </span>
            {
                state && !toggle && data?.children &&
                <span className='block '>
                    {
                        data?.children?.map((child, i) => {
                            return (
                                <Link href={child?.link || '#'}>
                                    <span className='hover:bg-purple-700 pl-10 flex items-center gap-2'>
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
