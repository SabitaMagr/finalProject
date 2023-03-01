import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { useForm } from 'react-hook-form';
import { FaUserAlt,FaKey } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri'

interface RegisterProps{
    editData?:Register;
}

export interface Register{
    id:number;
    name:string;
    email:string;
    password:string;
    repeatPassword:string;
    terms:string;
}

const LoginForm = () => {
    const {
        register,handleSubmit,
        setValue,formState:{errors},
    }= useForm<Register>();

    const Router =useRouter();
    const saveRegisterForm = async(value:Register)=>{
        const payload={
            ...value,
            id:new Date().getTime(),
        };

            // const { data,error } =await asyncPost();
            // if(data && !error){
            //     alert("You are registered!!");
            //     Router.push("/login");
            // }
            alert("You are registered!!");
                Router.push("/login");
        };
  return (
    <div>
     <div className='flex mx-auto p-16 justify-center w-[100%] h-[100%] bg-gray-300'>
        <form action="" onSubmit={handleSubmit(saveRegisterForm)} className="flex-col flex gap-6 bg-white border rounded-lg py-8 px-10">
            <h1 className=' text-center font-bold text-[2rem]'>Login</h1>
            <div className='relative '>
                <div className='flex gap-5 items-center'>
                    <label htmlFor="username">User name</label>
                    <input type="text" placeholder='User Name' 
                    {...register("name",{required:true})}
                    className="outline-none px-2 border-gray-400 border rounded-md py-1.5" />
                </div>
                    {errors?.name && (
                        <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                            Name is Required.
                        </small>
                    )}
            </div>
            <div className=''>
                <div className='flex gap-5 items-center'>
                    <label htmlFor="password">Password</label>                 
                   <input type="text" placeholder='Password' 
                    {...register("password",{required:true})}
                    className="outline-none px-2 border-gray-400 border py-1.5" />
                </div>
                    {errors?.name && (
                        <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                            Password is Required.
                        </small>
                    )}
            </div>
            <div className='gap-10'>
                <Link href={`/dashboard`}>
                    <button type='submit' className=' justify-center bg-green-700  hover:bg-green-400 w-[7rem] text-white font-bold text-lg  py-2 rounded-md'>
                    Login</button>
                </Link>
                
            </div>
        </form>
    </div>

      
    </div>
  )
}

export default LoginForm
