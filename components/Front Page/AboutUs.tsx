import React from 'react'

const AboutUs = () => {
    return (<>
        <div className=" relative flex mx-auto  p-12 justify-start pl-[10rem] min-h-[90vh] w-[100%] !bg-no-repeat !bg-cover !bg-center " style={{ background: 'url(/images/about.jpg)' }}>
            <div className=' absolute inset-0 bg-black bg-opacity-70' />
            <div className='absolute my-52 mx-60 font-black text-white flex justify-center flex-col'>
                <span className='p-5 text-4xl   shadow-xl l font-black text-white'>
                    FRENZ'S CAFE
                </span>
                <span>
                    SERVING HOMESTYLE FAVORITES SINCE 1993.
                </span>
            </div>
        </div>
        <div className='flex py-10  '>
            <div className='w-[40%]'>
                <img src="/images/office.jpg" alt="" className=' rounded-full h-[26rem] w-[26rem]' />
            </div>
            <div className='flex flex-col items-center w-[60%] p-14'>
                <span className=' font-black text-xl'>Estd.1993</span>
                <span className=' font-bold text-lg py-3' >Best Cafe in the Valley</span>
                <p className=' px-10'>Perfection and class are synonymous with the neoteric approach at Cafe Nina, and all its credit goes to its visionary founder, Nina. Just a few minutes' walk from the American embassy, you will see a lot of Americans indulging in breakfast sets during the morning or having a relaxing brunch here. The interior is lined in such a way that gives you the opportunity
                    to make pleasant conversations with strangers or relax quietly in your own space. </p>
            </div>
        </div>
    </>
    )
}

export default AboutUs





