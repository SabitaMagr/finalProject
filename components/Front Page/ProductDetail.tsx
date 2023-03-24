import { FoodMenuUrl } from '../../apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FoodMenu } from '../../components/Food/Form'
import Image from 'next/image';

const ProductDetail = () => {
    const router = useRouter();
    const id = router.query?.id;
    // const {id} = router.query// object destructing 
    const [value,setValue] =useState(0);
    const increaseValue=()=>{
        setValue(value+1);
    }

    const decreaseValue=()=>{
        setValue(value-1);
    }
    const [foodDetails, setFoodDetails] =useState<FoodMenu>();
    const fetchFoodById = async () => {
        const { data, error } = await asyncGet(FoodMenuUrl.get + '/' + id);
        if (data && !error) {
            setFoodDetails(data?.data as FoodMenu);
        }
    }
    useEffect(() => {
        fetchFoodById();
        return () => {
            //clean up coide
        }
    }, []);
    return (
        <div className='flex py-5 min-h-[60vh]'>
            {/* {JSON.stringify(foodDetails)} */}
            <div className='w-[30%]'>
                <img className='w-[80%] h-[80%] rounded-md' alt={foodDetails?.photo} src={`http://localhost:5000/food/${foodDetails?.photo}`} />
            </div>
            <div className='flex flex-col w-[28%]'>
                <div className='flex flex-col border-b-slate-300 border-b' >
                    <span className=' text-xl font-black py-4'>{foodDetails?.name}</span>
                    <span className=' font-semibold text-slate-500'>{foodDetails?.description}</span>
                    <span className='  py-3 text-slate-500'>Brand : No brand</span>
                </div>
                <span className=' font-medium text-2xl text-orange-600 py-5'>Rs : {foodDetails?.price}</span>
                <div className=' py-3 text-slate-600 '>
                        <span className='text-lg pr-10'>Quantity  </span>
                        <button onClick={()=>decreaseValue()} className=' bg-slate-300 font-extrabold text-xl px-3 hover:text-slate-700'> - </button>
                        <span className='  font-extrabold text-xl px-4' >{value}</span>
                        <button onClick={()=>increaseValue()} className='bg-slate-300 font-extrabold text-xl px-3 hover:text-slate-700'> + </button>
                </div>
                <div className=' py-5 flex  gap-8'>
                    <button className=' text-center text-lg bg-slate-400 px-12 py-2 rounded-md'>Buy Now</button>
                    <button className=' text-center text-lg bg-slate-400 px-12 py-2 rounded-md'>Add to Cart </button>
                </div>
            </div>

        </div>

    )
}

export default ProductDetail

