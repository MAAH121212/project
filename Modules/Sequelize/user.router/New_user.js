import { Router } from "express";
import { createUser, deleteUser, getAlluser, updateUser } from "../product.router/controller/controller.js";
const router = Router();
router.get('/',getAlluser)

router.post('/signUp', createUser)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router;