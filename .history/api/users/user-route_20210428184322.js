import express from "express"
import { listUsers, updateUser, updateRole, delete } from "./user-controller.js"
const userRouter = express.Router()

userRouter
    .get('/list', listUsers)

    .post('/updateUser/:id', updateUser)

    .patch('updateUserRole/:id', updateRole)

    .delete('delete/:id', delete)

export default userRouter