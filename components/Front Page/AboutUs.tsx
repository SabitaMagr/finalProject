import React from 'react'

const AboutUs = () => {
    return (
        <div className=" relative flex mx-auto  p-12 justify-start pl-[10rem] min-h-[90vh] w-[100%] !bg-no-repeat !bg-cover !bg-center " style={{ background: 'url(/images/about.jpg)' }}>
            <div className=' absolute inset-0 bg-black bg-opacity-70' />
            <div className='absolute my-96 mx-32 font-black text-white flex justify-center flex-col'>
                <span className='p-5 text-4xl   shadow-xl l font-black text-white'>
                    FRENZ'S CAFE
                </span>
                <span>
                    SERVING HOMESTYLE FAVORITES SINCE 1993.
                </span>
            </div>

        </div>
    )
}

export default AboutUs





