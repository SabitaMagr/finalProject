import { FoodMenuUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import React from 'react'
import { FoodMenu } from '../Food/Form';
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


const FoodLIst = () => {
    const [foodList, setfoodList] = useState<FoodMenu[]>([]);

    const fetchFoodList = async () => {
        const { data, error } = await asyncGet(FoodMenuUrl.get);
        if (data && !error) {
            setfoodList(data?.data as FoodMenu[]);
        }
    }
    const router = useRouter();

    useEffect(() => {
        fetchFoodList();
    }, []);

    const handleClick = (e: any) => {
        const id = e.target.value;
        if (id) {
            router.push("/food/detail");
        }
    }
    return (
        <>
            <span className=' flex justify-center font-extrabold text-2xl pt-12 '>Food List</span>
            <span className=' ml-[48%] font-bold text-black'>______</span>
            <div className='grid grid-cols-4 gap-2  mx-[3rem]'>
                {
                    foodList?.length > 0 ? (
                        foodList?.map((data, i) => {
                            return (
                                <div key={i} onClick={handleClick} className=" rounded-md border-2 bg-white hover:shadow-md hover:bg-black my-5 hover:text-white" >
                                    <img src={`http://localhost:5000/food/${data?.photo}`} height={300} width={1100} alt="" />
                                    <div className=' p-2'>
                                        <h4 className=' font-semibold' >{data.name}</h4>
                                        <span className=' text-lg text-orange-600'>Rs.{data.price}</span>
                                    </div>
                                </div>
                            )
                        })) : ""
                }
            </div>
        </>
    )
}
export default FoodLIst
