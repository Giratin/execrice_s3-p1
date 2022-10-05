import express from "express";
import { addUser, login } from "../controller/userController.js";

const router = express.Router();
router.post("/add",addUser)
router.post("/login",login)
router.put("/editprofile/:id")
export default router;