import express from "express"

const userRouter = express.Router()

userRouter
    .get('/list', listUsers)
    .post('/updateUser/:id', updateUser)
    .patch('updateUserRole/:id', updateRole)
    .delete('delete/:id', delete)

export default userRouter