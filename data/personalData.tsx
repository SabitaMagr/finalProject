import { BsPerson } from "react-icons/bs";
import { BiLockOpen } from "react-icons/bi";
import { IoKeyOutline }  from 'react-icons/io5'


export interface personalData{
    id?:number;
    name?:string;
    icon?:React.ReactNode;
    link?: string;
}
 const personalDataInfo:personalData[]=[
    {
        id:1,
        name:'My Profile',
        icon:<BsPerson/>,
        link:''
    },
    {
        id:2,
        name:'Change Password',
        icon:<BiLockOpen/>,
        link:''
    },
    {
        id:3,
        name:'Log Out',
        icon:<IoKeyOutline/>,
        link:'http://localhost:3000'
    },

 ]

 export default personalDataInfo;

