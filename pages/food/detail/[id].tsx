import React from 'react'
import Mainlayout from '../../../layout/Mainlayout';
import ProductDetail from '../../../components/Front Page/ProductDetail'
const detail = () => {
    return (
        <div>
            <Detail />
        </div>
    )
}

export default detail

const Detail = () => {
    return (<>
        <Mainlayout title={'Admin'}>
            <div className='mx-[3rem] gap-4'>
                <ProductDetail />
            </div>
        </Mainlayout >
    </>

    )
}


