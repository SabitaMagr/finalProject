import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Mainlayout from '@/layout/Mainlayout'


export default function home() {
  return (
    <>
     <Home/>
    </>
  )
}


const Home =()=>(
  <Mainlayout title={'Admin'}>
  </Mainlayout>
) 