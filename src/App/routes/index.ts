import { Router } from 'express';
import { productRoutes } from '../modules/products/product.route';
import { cartRoutes } from '../modules/addToCart/addToCart.route';

export const router = Router();

const allRoutes = [
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
