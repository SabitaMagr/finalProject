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
    }, []);
    return (
        <div className='flex flex-col'>
            {/* {JSON.stringify(foodDetails)} */}
            <div className='w-[40%] bg-slate-300'>
                <img className='w-full' alt={foodDetails?.photo} src={`http://localhost:5000/food/${foodDetails?.photo}`} />

            </div>
            <div>

            </div>

        </div>

    )
}

export default ProductDetail

