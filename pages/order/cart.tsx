import CartDetail from '@/components/Order/CartDetail'
import Mainlayout from '@/layout/Mainlayout'
import React from 'react'

const cart = () => {
    return (
        <div>
            <Cart />
        </div>
    )
}

const Cart = () => {
    return (
        <>
            <Mainlayout title={'Admin'}>
                <CartDetail />
            </Mainlayout>
        </>
    )
}
export default cart
