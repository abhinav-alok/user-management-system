import express from "express"

const userRouter = express.Router()

userRouter.post('/api/register', (req, res) => {
    const { mobile, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 15)
    console.log(password, mobile, hashedPassword)
})


export default userRouter