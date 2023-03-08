
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import React, { SetStateAction } from 'react'
import { FaUserAlt, FaKey } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri'
import Logo from './Logo';

interface RegisterProps{
    editData?:Register;
     state:boolean,
     setState:React.Dispatch<SetStateAction<boolean>>
}

export interface Register {
    id: number;
    name: string;
    email: string;
    password: string;
    repeatPassword: string;
    terms: string;
}

const RegitserForm = ({state,setState}:RegisterProps) => {
    const {
        register, handleSubmit,
        watch,
        setValue, formState: { errors },
    } = useForm<Register>();

    const terms = watch('terms');
    const password = watch('password');
    const repeatPassword = watch('repeatPassword');

    const validatePassword = (value: string) => {
        if (value != password) {
            return Promise.resolve('dddd');
        } else {
            return Promise.reject('Password didnot match!');
        }
    }

    const Router = useRouter();
    const saveRegisterForm = async (value: Register) => {
        const payload = {
            ...value,
            id: new Date().getTime(),
        };

        // const { data,error } =await asyncPost();
        // if(data && !error){
        //     alert("You are registered!!");
        //     Router.push("/login");
        // }
        alert("You are registered!!");
        setState(s=>!s)
    };
    return (
        // <div className="flex mx-auto p-16 justify-start pl-[10rem] min-h-screen  w-[100%] h-[100%] !bg-no-repeat !bg-cover !bg-center " style={{background:'url(/images/Login.avif)'}}>
        <form action="" onSubmit={handleSubmit(saveRegisterForm)} className=" z-50 flex-col bg-[#f0f1f5] flex gap-3 border rounded-lg">
            <h1 className=' text-center font-bold text-[2rem]  border-x-[1px] border-b-[1px] hover:text-white hover:bg-black rounded-bl-[500rem] rounded-br-[500rem]  border-[#424242]'>Sign In</h1>
            <Logo />
            {/* {terms? 'yes': 'NO'}  //checking */}
            <div className='flex-col flex gap-5 justify-center pb-7 px-10'>
            <div className='relative '>
                <div className='flex gap-5 items-center'>
                    <span><FaUserAlt size={24} /></span>
                    <input type="text" placeholder='Your Name'
                        {...register("name", { required: true })}
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
                    <span><MdEmail size={24} /></span>
                    <input type="text" placeholder='Your Email'
                        {...register("email", {
                            required: { value: true, message: "Email is Required" },
                            pattern: {
                                message: "Invalid Email",
                                value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
                            },
                        })}
                        className="outline-none px-2 rounded-md  border-gray-400 border py-1.5" />
                </div>
                {errors?.email && (
                    <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                        {errors?.email?.message}
                    </small>
                )}
            </div>
            <div className=''>
                <div className='flex gap-5 items-center'>
                    <span><RiLockPasswordFill size={24} /></span>
                    <input type="password" placeholder='Password'
                        {...register("password", { required: true })}
                        className="outline-none px-2 border-gray-400 border py-1.5" />
                </div>
                {errors?.password && (
                    <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                        Password is Required.
                    </small>
                )}
            </div>
            <div className=''>
                <div className='flex gap-5 items-center'>
                    <span><FaKey size={24} /></span>
                    <input type="password" placeholder='Re-Enter your Password'
                        {...register("repeatPassword", { required: true, validate: (value) => value === password })}
                        className="outline-none px-2 border-gray-400 border py-1.5" />
                </div>
                {errors?.repeatPassword && (
                    <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                        {errors?.repeatPassword.message}

                    </small>
                )}
                {errors.repeatPassword && (
                    <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                        {errors.repeatPassword.type === 'validate'
                            ? 'Password do not match'
                            : 'This field is required'}
                    </small>
                )}
            </div>
            <div className=''>
                <div className='flex gap-5 items-center'>
                    <input type="checkbox" id="termsAndCondition"
                        {...register("terms", { required: true })}
                        className="outline-none  px-2 border-gray-400 border font-bold py-1.5" />
                    <h3 className=' mt-1'>I agree all statements in Terms  of <br /> service</h3>
                </div>
                {!terms && (
                    <small className='w-full rounded-md  text-red-600 flex justify-center right-0 top-0'>
                        Accept the Terms and Condition.
                    </small>
                )}
            </div>
            <div className=' justify-center flex'>
                <button type='submit' disabled={!terms}  className={`
                // ${!errors ? ' bg-red-400' : 'bg-blue-600'}  
                 bg-blue-700   w-[40%] text-white font-bold text-lg  py-2 rounded-md `}>
                    Register</button>

            </div>
          </div>
        </form>
    )
}
export default RegitserForm;
