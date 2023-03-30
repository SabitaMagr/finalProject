

import { useGlobal } from '@/context/GlobalContext';
import { message } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { SetStateAction, useEffect } from 'react'
import { useForm } from 'react-hook-form';
import Logo from './Logo';

interface LoginProps {
    // editData?:Register;
    state: boolean,
    setState: React.Dispatch<SetStateAction<boolean>>
}

export interface Login {
    id: number;
    name: string;
    password: string;
    terms: string;
}

const LoginForm = ({ setState, state }: LoginProps) => {
    const global = useGlobal();
    const {
        register, handleSubmit,
        setValue, formState: { errors },
    } = useForm<Login>();
    const useContext = useGlobal();
    const router = useRouter();
    const saveLoginForm = async (value: Login) => {
        const payload = {
            ...value,
            id: new Date().getTime(),
        };

        await useContext?.login(value?.name, value?.password).then((res) => {
            if (res?.role == 'User') {
                router.push("/");
            } else {
                router.push("/foodCategory");
            }
            // router.push('/dashbaord')
        }).catch(e => {
            console.log(e)
            message.error(e?.message || 'Something went wrong')
        })
    };
    useEffect(() => {
        if (global?.user) {
            router.push('/')
        }
    }, [])
    return (
        <div className=' z-50' >
            {/* <div className="flex mx-auto p-16 justify-start pl-[10rem] min-h-screen  w-[100%] h-[100%] !bg-no-repeat !bg-cover !bg-center " style={{background:'url(/images/Login.avif)'}}> */}
            < form action="" onSubmit={handleSubmit(saveLoginForm)} className="flex-col flex w-[100%] bg-[#f0f1f5] border rounded-lg " >
                <h1 className=' text-center font-bold text-[2rem]  border-x-[1px] border-b-[1px] hover:text-white hover:bg-black rounded-bl-[500rem] rounded-br-[500rem] mb-3 border-[#424242]'>Login</h1>
                <Logo />
                <div className='flex-col flex gap-5 justify-center pb-8 px-10'>
                    <div className='relative '>
                        <div className='items-center relative'>
                            <label htmlFor="username" className=' mt-4 absolute -top-1 font-[700] ml-2 bg-white'>User name</label> <br />
                            <input type="text" placeholder='Enter User Name'
                                {...register("name", { required: true })}
                                className="outline-none px-2 border-gray-400 h-[3rem] top-0 border w-full rounded-md py-1.5" />
                        </div>
                        {errors?.name && (
                            <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                                User Name is Required.
                            </small>
                        )}
                    </div>
                    <div className=''>
                        <div className='items-center relative'>
                            <label htmlFor="password" className=' mt-4 absolute -top-1 font-[700] ml-2 bg-white'>Password</label>   <br />
                            <input type="password" placeholder='Enter Password'
                                {...register("password", { required: true })}
                                className="outline-none rounded-md px-2 w-full h-[3rem] border-gray-400 border py-1.5" />
                        </div>
                        {errors?.name && (
                            <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                                Password is Required.
                            </small>
                        )}
                    </div>
                    <div className=''>
                        <div className='flex gap-5 items-center'>
                            <input type="checkbox" id="rememberMe" value="rememberMe"
                                {...register("terms", { required: true })}
                                className="outline-none  px-2 border-gray-400 border font-bold py-1.5" />
                            <h3 className=' mt-1'>Remember Me</h3>
                        </div>
                        {/* {errors?.terms && (
                        <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                            Accept the Terms and Condition.
                        </small>
                    )} */}
                    </div>
                    <div className=' justify-center flex'>
                        <button type='submit' className='  bg-green-700  hover:bg-green-400 w-[7rem] text-white font-bold text-lg  py-2 rounded-md'>
                            Login</button>
                    </div>
                    <div>
                        <span className='font-[600]'>Not Registered?</span>
                        <span onClick={() => setState(s => !s)} className=' text-[#09c3ed] font-[600]'>Create an Account</span>
                    </div>


                </div>

            </form >
        </div >


        //  </div>
    )
}

export default LoginForm
