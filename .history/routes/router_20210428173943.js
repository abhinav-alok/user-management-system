import userRouter from "../api/users/user-route.js"
import authRouter from "../api/auth/auth-route.js"


export default function routes(app) {
    app.use('/api/users', userRouter);
    app.use('/api/auth', authRouter)
}
