import express from "express"
import { listUsers, singleUser, updateUser, updateRole, deleteUser } from "./user-controller.js"
const userRouter = express.Router()

userRouter
    .get('/lists', listUsers)
    
    .get(':id', singleUser)

    .post('/updateUser/:id', updateUser)

    .patch('updateUserRole/:id', updateRole)

    .delete('delete/:id', deleteUser)

export default userRouter