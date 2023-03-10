
import Container from '@/components/Container';
import Table from '@/components/Food/Table';
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
        link: "food"
    },
    {
        title: "Food Menu",
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

//server side rendering 
export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {

    return {
        props: {
            type: 'admin'
        }
    }
}