import { asyncPatch } from '@/apis/rest.api';
import { useRouter } from 'next/router';
import React, { useRef, useState, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import { userUrl } from '@/apis/list.api';
import { Register } from '../Form/RegitserForm';

const ChangePassword = () => {
    const [show, setShow] = useState(false);
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
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<Register>();
    const router = useRouter();
    const saveChangePsw = async (value: Register) => {
        //api call
        const payload = {
            ...value,
        };

        const { data, error } = await asyncPatch(
            userUrl.put + editData.id,
            payload
        );
        if (data && !error) {
            alert("update success");
            router.push("/food");
        }
    };
    // useEffect(() => {
    //     if (editData) {
    //         setValue("categoryCode", editData?.categoryCode);
    //         setValue("categoryName", editData?.categoryName);
    //         setValue("id", editData?.id);
    //     }
    // }, [editData]);

    return (
        <div ref={ref} className=' flex justify-center my-14'>
            <form onSubmit={handleSubmit(saveChangePsw)}
                action="" className=' rounded-md bg-white  w-[30%]  h-[60%] border border-slate-100 shadow-xl'>
                <span className=' border-b rounded-md bg-blue-300 flex justify-center p-3 text-2xl font-medium border-b-slate-200 '>Change Password</span>
                <div className=' flex  py-5 justify-center '>
                    <div className=' flex flex-col gap-5'>
                        <input  {...register("password")} type="text " className='border p-3 outline-none  rounded-md flex justify-center border-slate-200' placeholder='Current Password' />
                        <input {...register("password")} type="text" className='border p-3  outline-none  rounded-md flex justify-center border-slate-200' placeholder='New Password' />
                        <input {...register("password")} type="text" className='border p-3  outline-none  rounded-md flex justify-center border-slate-200' placeholder='Confirm Password' />
                        <button className=' bg-green-400 p-3 rounded-md w-[50%] text-lg ml-12 hover:bg-green-600 hover:text-white'>Submit</button>
                    </div>
                </div>
            </form>
        </div >

    )
}

export default ChangePassword
