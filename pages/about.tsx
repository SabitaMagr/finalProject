import AboutUs from '@/components/Front Page/AboutUs'
import HomeSideBar from '@/layout/HomeSideBar'
import Mainlayout from '@/layout/Mainlayout'
import React from 'react'

const about = () => {
    return (
        <div>
            <About />
        </div>
    )
}

export default about

const About = () => {
    return (
        <>
            <Mainlayout title={'Admin'}>
                <div className='mx-[3rem] gap-4 '>
                    <AboutUs />
                </div>
            </Mainlayout >

        </>
    )
}
