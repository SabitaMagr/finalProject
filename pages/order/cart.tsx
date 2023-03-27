import CartDetail from '@/components/Order/CartDetail'
import DeliveryDetail from '@/components/Order/DeliveryDetail'
import Mainlayout from '@/layout/Mainlayout'
import React, { useState } from 'react'

const cart = () => {
    return (
        <div>
            <Cart />
        </div>
    )
}

const Cart = () => {
    const [state, setState] = useState<boolean>(false);
    return (
        <>
            <Mainlayout title={'Admin'}>
                {
                    !state ?
                        <CartDetail setState={setState} state={state} />
                        :
                        <DeliveryDetail setState={setState} state={state} />
                }
            </Mainlayout>
        </>
    )
}
export default cart
