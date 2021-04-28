import express from "express"
import { listUsers, singleUser, createUser, updateUser, updateRole, deleteUser } from "./user-controller.js"
const userRouter = express.Router()

userRouter
    .get('/:id', singleUser)
    .get('/lists', listUsers)


    .post('/create', createUser)
    .post('/updateUser', updateUser)

    .patch('/updateRole/:id', updateRole)

    .delete('/delete/:id', deleteUser)

export default userRouter