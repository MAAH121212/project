import { Router } from "express";
import { getProduct, postProduct, delProduct, setProduct } from "./proController.js";
const router = Router();

router.get('/product', getProduct)
router.post('/products', postProduct)
router.delete('/delpro/:id', delProduct)
router.put('/setPro/:id', setProduct)

export default router;