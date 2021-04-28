import userRouter from "../api/users/user-route.js"
import authRouter from "../api/auth/auth-route.js"


export default function routes(app) {
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/auth', authRouter)
}
