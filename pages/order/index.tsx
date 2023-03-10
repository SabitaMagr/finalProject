import Container from '@/components/Container';
import Table from '@/components/Order/Table';
import AdminMainLayout from '@/layout/AdminMainLayout';
import { GetServerSideProps, GetServerSidePropsContext } from 'next';
import React from 'react'

const index = () => {
    return (
        <div>
            <Index />
        </div>
    )
}

export default index


const breadCrumb: { title: string; link: string }[] = [
    {
        title: "Home",
        link: "/user"
    },
    {
        title: "Order",
        link: "#"
    },
];

const Index = () => {
    return (
        // <AdminMainLayout>
        <Container breadCrumb={breadCrumb}>
            <Table />
        </Container>
        // </AdminMainLayout>
    )
}

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {
            type: 'admin'
        }
    }
}
