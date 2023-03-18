import { BiUserCircle } from "react-icons/bi";
import { FaCartArrowDown } from "react-icons/fa";

interface SideBarInterface {
    title?: string;
    link?: string;
    icon?: React.ReactNode;
}

const sideBarData: SideBarInterface[] = [
    {
        title: 'Home',
        link: '/'
    },
    // {
    //     title: 'Our Menu',
    //     link: '/menu'
    // },
    // {
    //     title:'Gallery',
    //     link:'/gallery'
    // },
    // {
    //     title:'Our News',
    //     link:'/news'
    // },
    {
        title: 'Contact Us',
        link: '/contact'
    },
    {
        title: 'Login',
        link: '/login',
        icon: <BiUserCircle size={27} />
    }
    // ,
    // {
    //     icon: <FaCartArrowDown />
    // }

]

export default sideBarData;