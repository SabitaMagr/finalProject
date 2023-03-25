import React from 'react'

const ChangePassword = () => {
    return (
        <div className=' flex justify-center my-14'>
            <div className=' rounded-md bg-white  w-[30%]  h-[60%] border border-slate-100 shadow-xl'>
                <span className=' border-b rounded-md bg-blue-300 flex justify-center p-3 text-2xl font-medium border-b-slate-200 '>Change Password</span>
                <div className=' flex  py-5 justify-center '>
                    <div className=' flex flex-col gap-5'>
                        <input type="text " className='border p-3 outline-none  rounded-md flex justify-center border-slate-200' placeholder='Current Password' />
                        <input type="text" className='border p-3  outline-none  rounded-md flex justify-center border-slate-200' placeholder='New Password' />
                        <input type="text" className='border p-3  outline-none  rounded-md flex justify-center border-slate-200' placeholder='Confirm Password' />
                        <button className=' bg-green-400 p-3 rounded-md w-[50%] text-lg ml-12 hover:bg-green-600 hover:text-white'>Submit</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ChangePassword
