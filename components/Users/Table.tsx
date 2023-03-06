import { registerUrl } from '@/apis/list.api';
import { asyncGet } from '@/apis/rest.api';
import React from 'react'
import { useEffect, useState } from "react";


export interface RegisterUser{
    id:number;
    name:string;
    password:string;
    email:string;
    rePassword:string;
}

const Table = () => {
    const [user,setUser]=useState<RegisterUser[]>([]);
    const [filterUser,setFilterUser]=useState<RegisterUser[]>([]);

    const fetchAllUser =async()=>{
        const{data,error} =await asyncGet(registerUrl.get);
        if(data && !error){
            setUser(data?.data as RegisterUser[]);
            setFilterUser(data?.data as RegisterUser[]);
        }
    };
    const filterSearch=(e:any)=>{
        const value=e.target.values;
        if(value){
            setFilterUser(
                user.filter(
                    (f)=>
                    f.name?.toString().includes(value)||
                    f.password?.toString().includes(value)
                )
            );
        }else{
            setFilterUser(user);
        }
    };

    useEffect(()=>{
        fetchAllUser();
    },[]);
  return (
    <div>
        <div className='flex justify-between my-3 mt-4'>
            <div>
                <input type="text"
                onChange={filterSearch} 
                className="border border-gray-400 rounded-md outline-none p-"/>
            </div>
        </div>
        <div className='p-2'>
            <table className='w-full mt-3'>
                <thead className='text-white bg-purple-600'>
                    <tr>
                        <th className='p-3'>S.N</th>
                        <th className='p-3'>User Name</th>
                        <th className='p-3'>Password</th>
                        <th className='p-3'>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {filterUser?.length > 0?(
                        filterUser ?.map((data,i)=>{
                            return(
                                <tr className='hover:bg-gray-200 p-3 text-center'>
                                    <td className='p-3'>{i+1}</td>
                                    <td className='p-3'>{data.name}</td>
                                    <td className='p-3'>{data.password}</td>
                                    <td className='p-3'>{data.email}</td>
                                </tr>
                            )
                        })
                    ):(
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

