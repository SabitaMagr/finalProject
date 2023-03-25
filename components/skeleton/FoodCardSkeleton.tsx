import React from 'react'

const FoodCardSkeleton = () => {
    return (
        <div className='animate-pulse'>
            <div className='h-32 bg-gray-400 w-full ' />
            <div className=' w-[40%] justify-center   mt-3'  >
                <div className='h-3 bg-gray-400 ' />
            </div>
            <div className=' w-[40%] justify-center   mt-3'  >
                <div className='h-4 bg-gray-400 ' />
            </div>
        </div >
    )
}

export default FoodCardSkeleton
