import { useGlobal } from '@/context/GlobalContext';
import React, { SetStateAction, useState } from 'react'

interface CardProps {
    state: boolean,
    setState: React.Dispatch<SetStateAction<boolean>>
}

const CartDetail = ({ setState, state }: CardProps) => {
    const useContext = useGlobal();

    return (
        <div className=' p-5 flex justify-center   bg-white min-h-screen'>
            <div className='  border w-[60%] h-[70%] shadow-lg border-slate-100 rounded-md '>
                <span className=' bg-red-400 text-black font-black text-2xl flex justify-center p-4'>Your Cart</span>
                <div className=' p-5'>
                    <table className=' table-fixed'>
                        <thead className='text-black'>
                            <tr className=' border-b mx-10 border-b-slate-100'>
                                <th className='p-3 w-[25%]'>Food</th>
                                <th className='p-3 w-[25%]'>Price</th>
                                <th className='p-3 w-[25%]'>Quantity</th>
                                <th className='p-3 w-[25%]'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                useContext?.cart?.map((data: any, i: number) => {
                                    return (
                                        <tr className=' border-b  border-b-slate-200 py-2' key={i} >
                                            {/* {JSON.stringify(data)} */}
                                            <td className=' text-center p-3'>{data?.name}</td>
                                            <td className=' text-center p-3'>Rs {data?.price}</td>
                                            <td className=' text-center p-3'>{data?.quantity}</td>
                                            <td className=' text-center p-3'>Rs {data?.price * data?.quantity}</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className=' flex justify-end  py-5 '>
                        <div className='w-[25%] flex flex-col gap-y-1'>
                            <span className='border-b border-b-slate-200 py-1'>Sub-Total : Rs {useContext?.cart?.length > 0 ? useContext?.cart?.map((m: any) => m.quantity * m?.price)?.reduce((p: number, c: number) => p + c) : 0}</span>
                            {/* <span className='border-b border-b-slate-200 py-1'>Delivery Charge : Rs 100</span> */}
                            {/* <span className='border-b border-b-slate-200 py-1'>Grand-Total : Rs 300</span> */}
                            <button onClick={() => setState(s => !s)} className=' bg-green-400 hover:bg-green-600 mt-5 hover:text-white p-2 rounded-md text-lg'>Check Out</button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default CartDetail



