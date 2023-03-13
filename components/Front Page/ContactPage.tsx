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
        return (
            <div>
                <form
                    onSubmit={handleSubmit(saveContactInfo)}
                    action=""
                    className="flex-col flex gap-6"
                >
                    <span>Contact Us</span>
                    <div className=" relative items-center">
                        <div className="flex  justify-center gap-2">
                            <label htmlFor="" className=" text-lg p-2 w-[30%]">
                                First Name:
                            </label>
                            <input
                                placeholder="Enter Item"
                                {...register("firstName", { required: true })}
                                className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                        {errors?.firstName && (
                            <small className="w-full text-red-600 flex justify-center right-0 top-0">
                                First Name is required
                            </small>
                        )}
                    </div>
                    <div className=" relative items-center">
                        <div className="flex  justify-center gap-2">
                            <label htmlFor="" className=" text-lg p-2 w-[30%]">
                                Last Name:
                            </label>
                            <input
                                placeholder="Enter Item"
                                {...register("lastName", { required: true })}
                                className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                        {errors?.lastName && (
                            <small className="w-full text-red-600 flex justify-center right-0 top-0">
                                Last Name is required
                            </small>
                        )}
                    </div>
                    <div className=" relative items-center">
                        <div className="flex justify-center gap-2">
                            <label htmlFor="" className="text-lg p-2 w-[30%]">
                                Price:
                            </label>
                            <input
                                placeholder="Enter Price"
                                {...register("email", { required: true })}
                                className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
                                type="number"
                            />
                        </div>
                        {errors?.email && (
                            <small className="w-full text-red-600 flex justify-center right-0 top-0">
                                Price is required
                            </small>
                        )}
                    </div>
                    <div className=" relative items-center">
                        <div className="flex justify-center gap-2">
                            <label htmlFor="" className="text-lg p-2 w-[30%]">
                                Company Name:                        </label>
                            <input
                                {...register("companyName", { required: true })}
                                className="outline-none px-2 rounded-md w-[30%] border-gray-400 border py-1.5"
                                type="file"
                            />
                        </div>
                    </div>
                    <div className=" relative items-center">
                        <div className="flex justify-center gap-2">
                            <label htmlFor="" className="text-lg p-2 w-[30%]">
                                Phone Number:
                            </label>
                            <input
                                {...register("phoneNumber", { required: true })}
                                className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                        {errors?.phoneNumber && (
                            <small className="w-full text-red-600 flex justify-center right-0 top-0">
                                Phone Number is Required
                            </small>
                        )}
                    </div>
                    <div className=" relative items-center">
                        <div className="flex justify-center gap-2">
                            <label htmlFor="" className="text-lg p-2 w-[30%]">
                                Message:
                            </label>
                            <input
                                {...register("message")
                                //  { required: true })
                                }
                                className="outline-none px-2 rounded-md border-gray-400 border py-1.5"
                                type="text"
                            />
                        </div>
                        {/* {errors?.message && (
                        <small className="w-full text-red-600 flex justify-center right-0 top-0">
                            Phone Number is Required
                        </small>
                    )} */}
                    </div>
                    <div className="flex justify-center pt-5">
                        <button
                            type="submit"
                            className="bg-purple-700  text-white px-8 py-2 rounded-md"
                        >
                        </button>
                    </div>
                </form >
                <div>
                    <span>Enagage and Experience </span>
                    <div>
                        <div>
                            <span><FiPhoneCall /></span>
                            <div>
                                <span className=' rounded-full p-2 bg-white'>Call Us</span>
                                <span>012 345 678</span>
                            </div>
                        </div>
                        <div>
                            <span><AiFillMail /></span>
                            <div>
                                <span rounded-full p-2 bg-white>Email Us</span>
                                <span>cafe@gmail.com</span>
                            </div>
                        </div>
                        <div>
                            <span><MdLocationOn /></span>
                            <div>
                                <span rounded-full p-2 bg-white>Location</span>
                                <span>cafe@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactPage
