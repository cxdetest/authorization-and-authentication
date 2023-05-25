import { Router } from 'express';
import * as productsController from '../controllers/products.controller';
import { authJWT } from '../middlewares';
const router = Router();

router.post(
  '/',
  [authJWT.verifyToken, authJWT.isModerator],
  productsController.createProduct
);

router.get('/', productsController.getProducts);

router.get('/:productID', productsController.getProductByID);

router.put(
  '/:productID',
  [authJWT.verifyToken, authJWT.isAdmin],
  productsController.updateProductByID
);

router.delete(
  '/:productID',
  [authJWT.verifyToken, authJWT.isAdmin],
  productsController.deleteProductByID
);

export default router;
