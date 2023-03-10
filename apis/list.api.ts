// type Crud={
//     [key:string]:string,
// } & Record<'get|post|put|delete',string>


const user={
   get:'/register',
   post:'/register',
   put:'/register/',
   delete:'/register/',
}


const foodCategory={
    get:'/foodCategory',
    post:'/foodCategory',
    put:'/foodCategory',
    delete:'/foodCategory',
}

const orderList={
    get:'/order',
    post:'/order',
    put:'/order/',
    delete:'/order/',
}

const FoodMenu={
    get:'/foodMenu',
    post:'/foodMenu',
    put:'/foodMenu',
    delete:'/foodMenu',
}

export {
    FoodMenu as FoodMenuUrl,
    user as userUrl,
    orderList as orderUrl,
    foodCategory as foodCategoryUrl
}