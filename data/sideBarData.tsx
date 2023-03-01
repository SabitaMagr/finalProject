interface SideBarInterface{
    title:string;
    link:string;
    icon?:React.ReactNode;
}

const sideBarData:SideBarInterface[]=[
    {
        title:'Home',
        link:'/home'
    },
    {
        title:'Our Menu',
        link:'/menu'
    },
    {
        title:'Gallery',
        link:'/gallery'
    },
    {
        title:'Our News',
        link:'/news'
    },
    {
        title:'Contact Us',
        link:'/contact'
    },
    {
        title:'Register',
        link:'/register'
    }
]

export default sideBarData;