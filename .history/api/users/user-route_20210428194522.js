import express from "express"
import { listUsers, singleUser, updateUser, updateRole, deleteUser } from "./user-controller.js"
const userRouter = express.Router()

userRouter
    .get('/:id', singleUser)
    .get('/lists', listUsers)


    .post('/updateUser', updateUser)

    .patch('updateRole/:id', updateRole)

    .delete('delete/:id', deleteUser)

export default userRouter