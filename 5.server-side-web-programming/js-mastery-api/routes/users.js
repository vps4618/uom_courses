import express from "express";
import { getAllUsers,getUserById,postUser,deleteUser,updateUser } from "../controllers/users.js";

const router = express.Router();

//all routes in here start with /users
router.get('/',getAllUsers);

// post a user
router.post('/',postUser);

// get specifc user details by id
router.get('/:id',getUserById);

// delete a user by specific id
router.delete('/:id',deleteUser);

// update user details
router.patch('/:id',updateUser);

export  default router;