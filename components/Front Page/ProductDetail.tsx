import { FoodMenuUrl } from '../../apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FoodMenu } from '../../components/Food/Form'
import Image from 'next/image';
import { useGlobal } from '@/context/GlobalContext';

const ProductDetail = () => {
    const useContext = useGlobal()
    const router = useRouter();
    const id = router.query?.id;
    // const {id} = router.query// object destructing 
    const [value, setValue] = useState(1);
    const increaseValue = () => {
        setValue(value + 1);
    }

    const decreaseValue = () => {
        setValue(value - 1);
    }
    const [foodDetails, setFoodDetails] = useState<FoodMenu>();
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
    }, [router.isReady]);
    return (
        <div className='flex gap-10 py-5 min-h-[60vh]'>
            {/* {JSON.stringify(foodDetails)} */}
            <div className='w-[40%]'>
                <img className='w-[90%] h-[100%] rounded-md' alt={foodDetails?.photo} src={`http://localhost:5000/food/${foodDetails?.photo}`} />
            </div>
            <div className='flex flex-col w-[60%]'>
                <div className='flex flex-col border-b-slate-300 border-b' >
                    <span className=' text-xl font-black py-4'>{foodDetails?.name}</span>
                    <span className=' font-semibold text-slate-500'>{foodDetails?.description}</span>
                    <span className='  py-3 text-slate-500'>Brand : No brand</span>
                </div>
                <span className=' font-medium text-2xl text-orange-600 py-5'>Rs : {foodDetails?.price}</span>
                <div className=' py-3 text-slate-600 '>
                    <span className='text-lg pr-10'>Quantity  </span>
                    <button onClick={() => decreaseValue()} disabled={value <= 0} className='  font-extrabold text-xl px-3 hover:bg-slate-300'> - </button>
                    <span className=' text-black text-xl px-4' >{value}</span>
                    <button onClick={() => increaseValue()} disabled={value >= 20} className=' font-extrabold text-xl px-3 hover:bg-slate-300'> + </button>
                </div>
                {/* {JSON.stringify(foodDetails?.status)} */}

                {
                    foodDetails?.status == '1' ?
                        <div className=' py-5 flex  gap-8'>
                            <button className=' text-center text-lg bg-blue-600 px-12 py-2 hover:bg-blue-400 rounded-md'>Buy Now</button>
                            <button onClick={() => { useContext?.setCart((c: any) => [...c, { ...foodDetails, quantity: value }]); localStorage.setItem('cart', JSON.stringify(useContext?.cart)) }} className=' text-center text-lg bg-orange-600 px-12 py-2 hover:bg-orange-400  rounded-md'>Add to Cart </button>
                        </div>

                        :
                        <span className=' text-lg mt-5 text-red-700'>Out of Stock</span>
                }

            </div>
        </div>

    )
}

export default ProductDetail

