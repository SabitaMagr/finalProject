import { foodCategoryUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import { FoodCategory } from '@/components/FoodCategory/Form';
import adminSideBarData from '@/data/adminSideBarData'
import Link from 'next/link'
import { useRouter } from 'next/router';
import React from 'react'
import { useEffect, useState } from "react";
import { useFormState } from 'react-hook-form';

const HomeSideBar = () => {
    const router = useRouter();
    const [foodCategoryList, setfoodCategory] = useState<FoodCategory[]>([]);
    const fetchFoodCategoryList = async () => {
        const { data, error } = await asyncGet(foodCategoryUrl.get);
        if (data && !error) {
            setfoodCategory(data?.data as FoodCategory[]);
        }
    }

    useEffect(() => {
        fetchFoodCategoryList();
    }, []);

    return (
        <>
            <div className={`  text-black font-bold flex min-h-[60vh] inset-0 bg-gray-600 w-[15%] pt-[5rem] `}>
                <div className='mt-2'>
                    <ul className=''>
                        {foodCategoryList?.length > 0 ? (
                            foodCategoryList?.map((data, i) => {
                                return (
                                    <>
                                        {
                                            <Link key={i} href={data?.link || '#'}>

                                                <li className={`p-2 px-3 ${router.asPath == data.link ? "bg-purple-700" : ""}
                                             hover:bg-purple-700 flex gap-4 items-center `}>
                                                    <span className='text-sm'>{data.categoryName}

                                                    </span>
                                                </li>
                                            </Link>


                                        }
                                    </>
                                )
                            })) : ""
                        }
                    </ul>
                </div>
            </div>
        </>
    )
}

export default HomeSideBar
