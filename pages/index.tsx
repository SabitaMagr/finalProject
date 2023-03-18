import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Mainlayout from '@/layout/Mainlayout'
import HomeSideBar from '@/layout/HomeSideBar'
import ContactPage from '@/components/Front Page/ContactPage'
import { Carousel } from 'antd'
import CustomCarousel from '@/components/Front Page/CustomCarousel'
import FoodLIst from '@/components/Front Page/FoodLIst'


export default function home() {
  return (
    <>
      <Home />
    </>
  )
}


const Home = () => (
  <Mainlayout title={'Admin'}>
    <div className='flex mx-[3rem] gap-4 '>
      <HomeSideBar />
      <CustomCarousel />
    </div>
    {/* {
        [0, 0, 0, 0, , 0, 0, 0].map((d, i) => {
          return (
            <div className='p-5 hover:shadow-md bg-slate-500 hover:border-5'>
              items
            </div>
          )
        })
      } */}
    <FoodLIst />
  </Mainlayout >
)




