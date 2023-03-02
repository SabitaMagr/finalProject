// type Crud={
//     [key:string]:string,
// } & Record<'get|post|put|delete',string>


const register={
   get:'/register',
   post:'/register',
   put:'/register/',
   delete:'/register/',
}

export {
    register as registerUrl
}