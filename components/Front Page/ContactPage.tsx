import { contactUrl } from '@/apis/list.api';
import { asyncPost } from '@/apis/rest.api';
import { useRouter } from 'next/router';
import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { AiFillMail } from 'react-icons/ai'
import { MdLocationOn } from 'react-icons/md'
import { useForm } from 'react-hook-form';

export interface contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    companyName: string;
    phoneNumber: string;
    message: string;
}

const ContactPage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<contact>();
    const router = useRouter();


    const saveContactInfo = async (value: contact) => {
        //api call
        const payload = {
            ...value,
        };
        const router = useRouter();

        const { data, error } = await asyncPost(contactUrl.post, payload);
        if (data && !error) {
            alert("saved success");
            router.push("/home");
        }
    }
    return (
        <div className=' relative  z-90 !bg-no-repeat !bg-cover !bg-black'
            style={{ background: 'url(/images/contact.jpg)' }}
        >
            <div className='absolute inset-0 bg-black  bg-opacity-75 ' />
            <span className='flex   text-white font-extrabold text-2xl'>Contact Us</span>

            <div className='flex'>
                <form
                    onSubmit={handleSubmit(saveContactInfo)}
                    action=""
                    className="flex-col flex gap-4 text-white px-14 w-[50%] relative "
                >

                    <div className=" relative items-center  ">
                        <div className="flex   gap-2">
                            <label htmlFor="" className=" text-base p-2 w-[28%]">
                                First Name:
                            </label>
                            <input
                                {...register("firstName", { required: true })}
                                className="outline-none px-2 rounded-md w-[57%] border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className=" relative items-center">
                        <div className="flex  gap-2">
                            <label htmlFor="" className=" text-base p-2 w-[28%]">
                                Last Name:
                            </label>
                            <input
                                {...register("lastName", { required: true })}
                                className="outline-none px-1.5 rounded-md w-[57%] border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className=" relative items-center">
                        <div className="flex gap-2">
                            <label htmlFor="" className="text-base p-2 w-[28%]">
                                Email:
                            </label>
                            <input
                                {...register("email", { required: true })}
                                className="outline-none px-1.5  w-[57%] rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className=" relative items-center">
                        <div className="flex gap-2">
                            <label htmlFor="" className="text-base p-2 w-[28%]">
                                Company Name:
                            </label>
                            <input
                                {...register("companyName", { required: true })}
                                className="outline-none px-1.5 w-[57%] rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                    </div>
                    <div className=" relative items-center">
                        <div className="flex  gap-2">
                            <label htmlFor="" className="text-base p-2 w-[28%]">
                                Phone Number:
                            </label>
                            <input
                                {...register("phoneNumber", { required: true })}
                                className="outline-none px-1.5 w-[57%] rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>

                    </div>
                    <div className=" relative items-center">
                        <div className="flex  gap-2">
                            <label htmlFor="" className="text-base p-2 w-[28%]">
                                Message:
                            </label>
                            <textarea name="" id="" cols="30" rows="5" className="outline-none px-1.5  w-[57%] rounded-md border-gray-400 border py-1.5">

                            </textarea>
                        </div>
                    </div>
                    <div className="flex  py-5 px-40">
                        <button
                            type="submit"
                            className="bg-black border-2 hover:bg-white hover:text-black  font-bold border-white text-white px-8 py-2 rounded-md"
                        >Submit
                        </button>
                    </div>
                </form >
                <div className=' relative  px-12 py-7 text-white  w-[50%]'>
                    <div className=' '>
                        <span className=' font-extrabold   text-lg'>Engage and Experience </span>
                        <div className=' py-5'>
                            <div className=' flex py-3'>
                                <div className=' border-2 rounded-full  p-2 border-white'>
                                    <span><FiPhoneCall size={27} /></span>
                                </div>
                                <div className=' ml-3 '>
                                    <span className=' font-semibold block'>Call Us</span>
                                    <span>012 345 678</span>
                                </div>
                            </div>
                            <div className='flex py-3'>
                                <div className=' border-2 rounded-full  p-2 border-white'>
                                    <span><AiFillMail size={27} /></span>
                                </div>
                                <div className=' ml-3 '>
                                    <span className=' font-semibold block' >Email Us</span>
                                    <span className=' font-medium'>cafe@gmail.com</span>
                                </div>
                            </div>
                            <div className='flex py-3'>
                                <div className=' border-2 rounded-full  p-2 border-white'>
                                    <span><MdLocationOn size={27} /></span>
                                </div>
                                <div className=' ml-3 '>
                                    <span className=' font-semibold block'>Location</span>
                                    <span className=' font-medium'>New Baneshwor,Kathmandu</span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default ContactPage
