export default function routes(app) {
    app.use('/api/v1/tasks',  taskRoute);
    app.use('/api/v1/users', userRoute);
    app.use('/api/v1/auth', authRoute)
}


export default routes;