import express from "express"
import bcryptjs from "bcryptjs"

const userRouter = express.Router()

userRouter.post('/api/register', async (req, res) => {
    const { mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 15)
    console.log(password, mobile, hashedPassword)
})


export default userRouter