import { orderUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import React from 'react'
import { useEffect, useState } from "react";


export interface orderList {
    id: number;
    name: string;
    price: string;
    total: number;
    status: string;
}

const Table = () => {
    const [order, setorder] = useState<orderList[]>([]);
    const [filterorder, setFilterorder] = useState<orderList[]>([]);

    const fetchAllOrder = async () => {
        const { data, error } = await asyncGet(orderUrl.get);
        if (data && !error) {
            setorder(data?.data as orderList[]);
            setFilterorder(data?.data as orderList[]);
        }
    };
    const filterSearch = (e: any) => {
        const value = e.target.values;
        if (value) {
            setFilterorder(
                order.filter(
                    (f) =>
                        f.name?.toString().includes(value))
            );
        } else {
            setFilterorder(order);
        }
    };

    useEffect(() => {
        fetchAllOrder();
    }, []);
    return (
        <div>
            <div className='flex justify-between my-3 mt-4'>
                <div>
                    <input type="text"
                        onChange={filterSearch}
                        className="border border-gray-400 rounded-md outline-none p-2" />
                </div>
            </div>
            <div className='p-2'>
                <table className='w-full mt-3'>
                    <thead className='text-white bg-[#279bfa]'>
                        <tr>
                            <th className='p-3'>Order No:</th>
                            <th className='p-3'>Items</th>
                            <th className='p-3'>Price</th>
                            <th className='p-3'>Total</th>
                            <th className='p-3'>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filterorder?.length > 0 ? (
                            filterorder?.map((data, i) => {
                                return (
                                    <tr key={i} className='hover:bg-gray-200 p-3 text-center'>
                                        <td className='p-3'>{i + 1}</td>
                                        <td className='p-3'>{data.name}</td>
                                        <td className='p-3'>{data.price}</td>
                                        <td className='p-3'>{data.total}</td>
                                        <td className='p-3'>{data.status}</td>
                                    </tr>
                                )
                            })
                        ) : (
                            <tr>
                                <td colSpan={6} className="text-center py-3">
                                    No data Found!
                                </td>
                            </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table

