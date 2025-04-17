import express from 'express';
import { createUser,deleteUser, getAllUsers, getUserById, updateUser } from '../controllers/userController.js';
const router=express.Router();
router.post("/user",createUser);
router.get("/user",getAllUsers);
router.get("/user/:id",getUserById);
router.put("/user/:id",updateUser);
router.delete("/user/:id",deleteUser);
export default router;