import { Router } from "express";
import { addNewProducts, getAllproducts, updatePro } from "./controller/proController.js";
const router = Router();
router.get('/product', getAllproducts)
router.post('/insertPro', addNewProducts)
router.put('/upPro', updatePro)




export default router;