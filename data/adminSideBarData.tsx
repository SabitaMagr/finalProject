import React from "react";
import {BiFoodMenu} from 'react-icons/bi'
import {GoTasklist} from 'react-icons/go'
import {HiOutlineUserGroup} from 'react-icons/hi'


interface SideBarInterface{
    title:string;
    icon:React.ReactNode
    link:string;
}
const adminSideBarData: SideBarInterface []= [
    {
        title:'Food Menu',
        icon:<BiFoodMenu/>,
        link:'/food'
    },
    {
        title:'Orders',
        icon:<GoTasklist/>,
        link:'order'
    },
    {
        title:'Users',
        icon:<HiOutlineUserGroup/>,
        link:'/user'
    }

]

export default adminSideBarData
