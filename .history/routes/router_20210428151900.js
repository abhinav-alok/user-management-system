import userRouter from "../api/users/user-route"


export default function routes(app) {
    app.use('/api/v1/tasks',  taskRoute);
    app.use('/api/v1/users', userRouter);
    app.use('/api/v1/auth', authRoute)
}
