// type Crud={
//     [key:string]:string,
// } & Record<'get|post|put|delete',string>


const user={
   get:'/user',
   post:'/user',
   put:'/user/',
   delete:'/user/',
}

export {
    user as userUrl
}

const foodCategory={
    get:'/foodCategory',
    post:'/foodCategory',
    put:'/foodCategory',
    delete:'/foodCategory',
}

export {
    foodCategory as foodCategoryUrl
}

const orderList={
    get:'/order',
    post:'/order',
    put:'/order/',
    delete:'/order/',
}

export {
    orderList as orderUrl
}


const FoodMenu={
    get:'/foodMenu',
    post:'/foodMenu',
    put:'/foodMenu',
    delete:'/foodMenu',
}

export {
    FoodMenu as FoodMenuUrl
}