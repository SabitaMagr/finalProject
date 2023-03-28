// type Crud={
//     [key:string]:string,
// } & Record<'get|post|put|delete',string>

const user = {
  get: "/register",
  post: "/register",
  put: "/register/",
  delete: "/register/",
};

const foodCategory = {
  get: "/food-category",
  post: "/food-category",
  put: "/food-category/",
  delete: "/food-category/",
};

const orderList = {
  get: "/order",
  post: "/order",
  put: "/order/",
  delete: "/order/",
};

const FoodMenu = {
  get: "/food",
  post: "/food",
  put: "/food/",
  delete: "/food/",
};

const contact = {
  get: "/contact",
  post: "/contact",
  put: "/contact/",
  delete: "/contact/",
};

const delivery = {
  get: "/delivery",
  post: "/delivery",
  put: "/delivery/",
  delete: "/delivery/",
};
const auth = {
  login: "/auth/login",
  current_user: "/auth/current-user",
};
export {
  FoodMenu as FoodMenuUrl,
  user as userUrl,
  orderList as orderUrl,
  foodCategory as foodCategoryUrl,
  contact as contactUrl,
  delivery as deliveryUrl,
  auth as authUrl,
};
