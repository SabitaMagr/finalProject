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
    <div>
        <AdminMainLayout title={'Admin'}>
            
        </AdminMainLayout>
    </div>
  )
}

export default admin
