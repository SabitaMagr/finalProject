import React from "react";
import { BiFoodMenu, BiCategory } from 'react-icons/bi'
import { GoTasklist } from 'react-icons/go'
import { HiOutlineUserGroup } from 'react-icons/hi'
import { IoFastFoodSharp } from 'react-icons/io5'


export interface SideBarInterface {
    title: string;
    icon: React.ReactNode
    link?: string;
    children?: {
        title: string;
        link: string;
        icon?: React.ReactNode
    }[]
}
const adminSideBarData: SideBarInterface[] = [
    {
        title: 'Food Menu',
        icon: <BiFoodMenu size={20} />,
        children: [{
            title: 'Food Category',
            link: '/foodCategory',
            icon: <BiCategory size={20} />
        },
        {
            title: 'Food',
            link: '/food',
            icon: <IoFastFoodSharp size={20} />
        }]
    },
    {
        title: 'Orders',
        icon: <GoTasklist size={20} />,
        link: '/order'
    },
    {
        title: 'Users',
        icon: <HiOutlineUserGroup size={20} />,
        link: '/user'
    }

]

export default adminSideBarData
