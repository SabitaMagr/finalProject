import React from 'react'

const CartDetail = () => {
    return (
        <div className=' p-5 flex justify-center relative  bg-white min-h-screen'>
            <div className=' absolute border w-[60%] h-[70%] shadow-lg border-slate-100 rounded-md '>
                <span className=' bg-red-400 text-black font-black text-2xl flex justify-center p-4'>Your Cart</span>
                <div className=' p-5'>
                    <table className='w-full'>'
                        <thead className='text-black'>
                            <tr className=' border-b mx-10 border-b-slate-100'>
                                <th className='p-3'>Food</th>
                                <th className='p-3'>Price</th>
                                <th className='p-3'>Quantity</th>
                                <th className='p-3'>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                [0, 0, 0].map((data, i) => {
                                    return (
                                        <tr className=' border-b border-b-slate-200 py-2' key={i} >
                                            <td className=' p-3'>Momo</td>                                            <td className=' p-3'>Momo</td>
                                            <td className=' p-3'>Rs 30</td>
                                            <td className=' p-3'>5</td>
                                            <td className=' p-3'>Rs 150</td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                    <div className=' flex flex-col py-5 w-[25%] justify-center ml-[36rem]'>
                        <span className='border-b border-b-slate-200 py-1'>Sub-Total : Rs 150</span>
                        <span className='border-b border-b-slate-200 py-1' >Sales Tax : Rs 50</span>
                        <span className='border-b border-b-slate-200 py-1'>Delivery Charge : Rs 100</span>
                        <span className='border-b border-b-slate-200 py-1'>Grand-Total : Rs 300</span>
                        <button className=' bg-green-400 hover:bg-green-600 hover:text-white p-2 rounded-md text-lg'>Check Out</button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartDetail



