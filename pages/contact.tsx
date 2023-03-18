import ContactPage from '@/components/Front Page/ContactPage'
import AdminMainLayout from '@/layout/AdminMainLayout'
import FrontenedNavaBar from '@/layout/FrontenedNavaBar'
import Mainlayout from '@/layout/Mainlayout'
import SideBar from '@/layout/SideBar'
import React from 'react'

const contact = () => {
    return (
        <Contact />
    )
}
export default contact

const Contact = () => {
    return (
        <Mainlayout>
            <ContactPage />
        </Mainlayout>
    )
}

