import { Router } from 'express';
import { productRoutes } from '../modules/products/product.route';
import { cartRoutes } from '../modules/addToCart/addToCart.route';
import { UserRoutes } from '../modules/User/user.route';

export const router = Router();

const allRoutes = [
  {
    path: '/auth',
    route: UserRoutes,
  },
  {
    path: '/product',
    route: productRoutes,
  },
  {
    path: '/cart',
    route: cartRoutes,
  },
];
allRoutes.map((ele) => router.use(ele.path, ele.route));
