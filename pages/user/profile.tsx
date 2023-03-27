import UserDetails from '@/components/Users/UserDetails'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'

const profile = () => {
    return (
        <div>
            <Profile />
        </div>
    )
}

const Profile = () => {
    return (
        <UserDetails />
    )
}

export default profile

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {
            type: 'admin'
        }
    }
}
