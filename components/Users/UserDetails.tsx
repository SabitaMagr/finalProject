import React from 'react'

const UserDetails = () => {
    return (
        <div className=' flex justify-center my-14'>
            <div className=' rounded-md bg-white w-[60%] h-[80%] border border-slate-100 shadow-xl'>
                <span className=' border-b rounded-md bg-blue-300 flex justify-center p-3 text-2xl font-medium border-b-slate-200 '>Personal Information</span>
                <div className=' flex py-5  gap-3'>
                    <div>
                        <div className=' flex p-5 gap-7'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Name:</label>
                            <input type="text " className='border py-2.5 px-2.5 outline-none w-[70%]  rounded-md flex justify-center border-slate-200' />
                        </div>
                        <div className=' flex p-5  gap-5'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Address:</label>
                            <input type="text " className='border py-2.5  px-2.5 outline-none w-[70%] rounded-md flex justify-center border-slate-200' />
                        </div>
                    </div>
                    <div>
                        <div className=' flex p-5  gap-5'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Phone No:</label>
                            <input type="number " className='border py-2.5  w-[70%] px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                        </div>
                        <div className=' flex p-5 gap-8'>
                            <label htmlFor="" className=' flex justify-center w-[30%]'>Email :</label>
                            <input type="email " className='border py-2.5  w-[70%] px-2.5 outline-none  rounded-md flex justify-center border-slate-200' />
                        </div>
                    </div>
                </div>
                <button className=' bg-green-400 mb-8 p-3 rounded-md w-[20%] text-lg ml-[18rem] hover:bg-green-600 hover:text-white'>Submit</button>
            </div>
        </div>
    )
}

export default UserDetails
