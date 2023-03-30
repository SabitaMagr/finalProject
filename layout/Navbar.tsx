import { BiUserCircle } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import React, { useEffect, useState, useRef } from 'react'
import Link from 'next/link';
import personalDataInfo from '@/data/personalData';
import { useRouter } from 'next/router';
import { useGlobal } from '@/context/GlobalContext';

interface Props {
    toggle: boolean;
    setToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const Navbar = ({ toggle, setToggle }: Props) => {
    const useContext = useGlobal();
    const [show, setShow] = useState<Boolean>(false);
    const displayDiv = () => setShow((show) => !show);
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = (e: MouseEvent) => {
        if (ref.current && !ref.current.contains(e?.target as Node)) {
            setShow(false)
        }
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [ref]);

    const router = useRouter();
    return (
        <div ref={ref}
            className={`fixed p-5 bg-white top-0 ${toggle ? "pl-[5rem]" : "pl-[5rem]"} text-blac
     shadow-md flex justify-between left-0 right-0`}>
            <div className={`${!toggle ? "ml-36" : "ml-1"}`}>
                <span onClick={() => setToggle((t) => !t)}>
                    <BsList size={25} />
                </span>
            </div>
            <div className='flex gap-3 items-center relative'>
                <span>{useContext?.user?.firstName || 'Sabita'}</span>
                {/* {JSON.stringify(useContext?.cart)} */}
                <span className=' text-slate-700' onClick={() => displayDiv()}>
                    <BiUserCircle size={27} />
                </span>
                {
                    show &&
                    <div className=' flex flex-col w-[250%] justify-start mt-[12rem] right-0 p-3 rounded-md  absolute bg-white  z-50 border border-slate-200 shadow-lg'>
                        <ul className=''>
                            {
                                personalDataInfo.map((data, i) => {
                                    return (
                                        <>
                                            <Link href={data?.link || '#'} key={i}>
                                                <li className={` ${router.asPath == data.link} border-b border-slate-200 flex gap-4 py-1.5 items-center`}>
                                                    <span>{data.icon}</span>
                                                    <span>{data.name}</span>
                                                </li>
                                            </Link>
                                        </>
                                    )
                                })
                            }
                        </ul>
                    </div>
                }
            </div>
        </div>
    )
}

export default Navbar
