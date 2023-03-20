import { BsFacebook, BsLinkedin, BsTwitter, BsInstagram } from 'react-icons/bs'



import React from "react";

export interface footerLink {
    link?: string;
    icon?: React.ReactNode;
}

const footerData: footerLink[] = [
    {
        icon: <BsFacebook size={30} />,
        link: "https://www.facebook.com"
    },
    {
        icon: <BsLinkedin size={30} />,
        link: "https://www.linkedin.com/"
    },
    {
        icon: <BsTwitter size={30} />,
        link: "https://twitter.com/"
    },
    {
        icon: <BsInstagram size={30} />,
        link: "https://www.instagram.com/"
    },

]

export default footerData