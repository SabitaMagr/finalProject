import ChangePassword from '@/components/Users/ChangePassword'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'
import React from 'react'

const password = () => {
    return (
        <div>
            <Password />
        </div>
    )
}

const Password = () => {
    return (
        <>
            <ChangePassword />
        </>
    )
}

export default password
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {
            type: 'admin'
        }
    }
}