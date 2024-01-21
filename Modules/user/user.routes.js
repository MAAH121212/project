// const route = require("express").Router();
import { Router } from "express";
const router = Router();
// const {allUser, abo} = require("./controller/user.controller")
import { getUser, addUser, updateUser, searchUser } from "./controller/user.controller.js";

router.get("/user", getUser )
router.post("/addUse", addUser)
router.patch("/user/:id", updateUser)
router.get("/user/search", searchUser)

export default router