import { userUrl } from '@/apis/list.api';
import { asyncPatch } from '@/apis/rest.api';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import React, { useEffect, useState, useRef } from 'react'
import { Register } from '../Form/RegitserForm';
import { useGlobal } from '@/context/GlobalContext';


const UserDetails = () => {
    const [show, setShow] = useState(false);
    const global = useGlobal();
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Register>();
    const router = useRouter();
    const saveChangeDtl = async (value: Register) => {
        //api call
        const payload = {
            ...value,
        };

        const { data, error } = await asyncPatch(
            userUrl.put + global?.user?.id,
            payload
        );
        if (data && !error) {
            alert("update success");
            router.push("/food");
        }
    };
    return (
        <div className=' flex justify-center my-14'>
            <form onSubmit={handleSubmit(saveChangeDtl)}
                action="" className=' rounded-md bg-white w-[60%] h-[80%] border border-slate-100 shadow-xl'>
                <span className=' border-b rounded-md bg-blue-300 flex justify-center p-3 text-2xl font-medium border-b-slate-200 '>Personal Information</span>
                <div className=' flex py-5  gap-3'>
                    <div>
                        <div className=' flex p-5 gap-7'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Name:</label>
                            <input {...register("name")} type="text " className='border py-2.5 px-2.5 outline-none w-[70%]  rounded-md flex justify-center border-slate-200' />
                        </div>
                        <div className=' flex p-5  gap-5'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Address:</label>
                            <input {...register("address")} type="text " className='border py-2.5  px-2.5 outline-none w-[70%] rounded-md flex justify-center border-slate-200' />
                        </div>
                    </div>
                    <div>
                        <div className=' flex p-5  gap-5'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Phone No:</label>
                            <input {...register("phoneNumber")} type="number " className='border py-2.5  w-[70%] px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                        </div>
                        <div className=' flex p-5 gap-8'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Email :</label>
                            <input {...register("email")} type="email " className='border py-2.5  w-[70%] px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                        </div>
                    </div>
                </div>
                <button className=' bg-green-400 mb-8 p-3 rounded-md w-[20%] text-lg ml-[18rem] hover:bg-green-600 hover:text-white'>Submit</button>
            </form>
        </div >
    )
}

export default UserDetails
