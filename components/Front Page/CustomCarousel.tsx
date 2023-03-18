import { FoodMenuUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import { Carousel } from 'antd'
import React from 'react'
import { FoodMenu } from '../Food/Form';

const CustomCarousel = () => {

    return (
        <div className='w-[85%] h-[30%]'>
            {/* <Carousel autoplay>
                {
                    // [0, 0, 0, 0, 0, 0, 0].map((sabita, i) => {
                    foodList?.length > 0 ? (
                        foodList?.map((data, i) => {
                            return (
                                <div key={i} className=" bg-slate-500">
                                    <img src={`http://localhost:5000/food/${data?.photo}`} height={300} width={1100} alt="" />
                                </div>
                            )
                        })) : ""
                }
            </Carousel> */}
            <Carousel autoplay>
                <div>
                    <img src='/images/pic1.jpg' className='h-[83vh] w-full' alt="" />
                    {/* <h1 className=' absolute'>Frenz Cafe</h1> */}
                </div>
                <div>
                    <img src='/images/pic2.jpg' className='h-[83vh] w-full' alt="" />
                </div>
                <div>
                    <img src='/images/pic5.jpg' className='h-[83vh] w-full' alt="" />
                </div>
                <div>
                    <img src='/images/pic4.jpg' className='h-[83vh] w-full' alt="" />
                </div>
                <div>
                    <img src='/images/pic.jpg' className='h-[83vh] w-full' alt="" />
                </div>
            </Carousel>
        </div>
    )
}

export default CustomCarousel
