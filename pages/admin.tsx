import AdminMainLayout from '@/layout/AdminMainLayout'
import React from 'react'

const breadCrumb:{title:string,link:string}[]=[
    {
        title:'Home',
        link:'#'
    },
    {
        title:'Dashboard',
        link:'#'
    }
]

const admin = () => {
  return (
       <Admin/>
  )
}

export default admin


const Admin =()=>(
        <AdminMainLayout title={'Admin'}>  
        </AdminMainLayout>
)
        

