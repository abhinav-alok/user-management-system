import express from "express"
import userRouter from "./user.js"

const router = express.Router()

router.use(userRouter('/api/register', (req, res, next) => {
    next()
}))

export default router;