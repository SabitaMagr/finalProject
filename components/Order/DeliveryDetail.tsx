import { deliveryUrl } from '@/apis/list.api';
import { asyncPost } from '@/apis/rest.api';
import React, { SetStateAction } from 'react'
import { useForm } from 'react-hook-form';

interface DeliveryProps {
    state: boolean,
    setState: React.Dispatch<SetStateAction<boolean>>
}

export interface Deilvery {
    id: number;
    name: string;
    deliveryDate: Date;
    delibveryTime: string;
    phoneNumber: string;
    address: string;
    receiverName: string;
    receiverAddress: string;
    receiverPhoneNo: number;

}

const DeliveryDetail = ({ setState, state }: DeliveryProps) => {

    const {
        register, handleSubmit,
        watch,
        setValue, formState: { errors },
    } = useForm<Deilvery>();

    const saveDeliveryForm = async (value: Deilvery) => {
        const payload = {
            ...value
        };

        const { data, error } = await asyncPost(deliveryUrl.post, payload);
        if (data && !error) {
            alert("Your Order has been registered!!");
            setState(s => !s)
        }
    };
    return (
        <form action="" onSubmit={handleSubmit(saveDeliveryForm)} className=' flex justify-center my-14'>
            <div className=' rounded-md bg-white w-[70%] h-[80%] border border-slate-100 shadow-xl'>
                <span className=' border-b rounded-md bg-blue-300 flex justify-center p-3 text-2xl font-medium border-b-slate-200 '>Delivery Detail Form</span>
                <div className=' flex py-5 px-6 gap-10'>
                    <div>
                        <div className='relative '>
                            <div className=' flex p-5 gap-10'>
                                <label htmlFor="" className=' flex justify-center'>Receiver Name :</label>
                                <input type="text " {...register("receiverName", { required: true })}
                                    className='border py-2.5 px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                            </div>
                            {errors?.receiverName && (
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                                    Receiver   Name is Required.
                                </small>
                            )}
                        </div>
                        <div className='relative '>
                            <div className=' flex p-5  gap-5'>
                                <label htmlFor="" className=' flex justify-center'>Receiver Address :</label>
                                <input type="text " {...register("receiverAddress", { required: true })} className='border py-2.5  px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                            </div>
                            {errors?.receiverAddress && (
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                                    Receiver   Address is Required.
                                </small>
                            )}
                        </div>
                        <div className='relative '>
                            <div className=' flex p-5 gap-12'>
                                <label htmlFor="" className=' flex justify-center'>Delivery Time :</label>
                                <input type="time" className='border w-[58%] py-2.5  px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='relative '>
                            <div className=' flex p-5  gap-5'>
                                <label htmlFor="" className=' flex justify-center'>Receiver Phone No:</label>
                                <input type="number "  {...register("receiverPhoneNo", { required: true })} className='border py-2.5  px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                            </div>
                            {errors?.receiverPhoneNo && (
                                <small className='w-full text-red-600 flex justify-center right-0 top-0'>
                                    Receiver Phone No is Required.
                                </small>
                            )}
                        </div>
                        <div className='relative '>
                            <div className=' flex p-5 gap-14'>
                                <label htmlFor="" className=' flex justify-center'>Delivery Date :</label>
                                <input type="date" className='border py-2.5 w-[58%]  px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className=' bg-green-400 mb-8 px-7 py-3 rounded-md  text-lg  hover:bg-green-600 hover:text-white'>Submit</button>

                </div>
            </div>
        </form>
    )
}

export default DeliveryDetail
