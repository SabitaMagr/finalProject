import footerData from '@/data/footerData'
import Link from 'next/link'
import React from 'react'
import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <>
            <div className=' p-5 text-white bg-black bg-opacity-60 border-t-black'>
                <h1 className=' font-bold text-xl flex justify-center'>Get in Touch </h1>
                <p className=' flex justify-between px-12'>Whatever you want your visitors to visit again, whether it is external resources, important secondary pages, sponsors, privacy policy, or terms and conditions,
                    you can show them in your footer by using this template.</p>
                <div>
                    <span className=' font-bold text-xl flex justify-center'>Follow Us:</span>
                    <span className=' ml-[40rem]'>______</span>
                    <div className=' flex  justify-center'>
                        {
                            footerData.map((data, i) => {
                                return (
                                    <Link key={i} href={data?.link as string}>
                                        <li className=' justify-between flex items-center p-5'>
                                            <span>{data?.icon}</span>
                                        </li>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className=' border-2 bg-black bg-opacity-60 border-t-black p-5'>
                <p className=' pt-1.5 text-white font-medium flex justify-center'>
                    Copyright © 2015 - 2019. Frenz Cafe. All Rights Reserved.
                </p>
            </div >
        </>
    )
}

export default Footer

