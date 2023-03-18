import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Mainlayout from '@/layout/Mainlayout'
import HomeSideBar from '@/layout/HomeSideBar'
import ContactPage from '@/components/Front Page/ContactPage'
import { Carousel } from 'antd'


export default function home() {
  return (
    <>
      <Home />
    </>
  )
}


const Home = () => (
  <Mainlayout title={'Admin'}>
    <div className='flex mx-[3rem] '>
      <HomeSideBar />
      <CustomCarousel />
    </div>
    <div className='grid grid-cols-6 gap-2 '>
      {
        [0, 0, 0, 0, , 0, 0, 0].map((d, i) => {
          return (
            <div className='p-5 hover:shadow-md bg-slate-500 hover:border-5'>
              items
            </div>
          )
        })
      }
    </div>
  </Mainlayout>
)



const CustomCarousel = () => {
  return (
    <div className='w-[85%]'>
      <Carousel autoplay>
        {
          [0, 0, 0, 0, 0, 0, 0].map((sabita, i) => {
            return (
              <div key={i} className="p-5 bg-slate-500">
                <h1>carousel {i}</h1>
              </div>
            )
          })
        }
      </Carousel>
    </div>
  )
}