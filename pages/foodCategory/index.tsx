
import Container from '@/components/Container';
import Table from '@/components/FoodCategory/Table';
import AdminMainLayout from '@/layout/AdminMainLayout';
import React from 'react'

const index = () => {
  return (
    <div>
      <Index/>
    </div>
  )
}

export default index


const breadCrumb: {title:string;link:string}[]=[
    {
        title:"Home",
        link:"foodCategory"
    },
    {
        title:"Food Category",
        link:"#"
    },
];

const Index=()=>{
    return(
        <AdminMainLayout>
            <Container breadCrumb={breadCrumb}>
                <Table/>
            </Container>
        </AdminMainLayout>
    )
}
