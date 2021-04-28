import express from "express"
import { listUsers, updateUser, updateRole, deleteUser } from "./user-controller.js"
const userRouter = express.Router()

userRouter
    .get('/list', listUsers)

    .post('/updateUser/:id', updateUser)

    .patch('updateUserRole/:id', updateRole)

    .delete('delete/:id', deleteUser)

export default userRouter