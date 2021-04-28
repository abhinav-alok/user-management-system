import express from "express" 
import mongoose from "mongoose"
import router from "./routes/router.js"


mongoose.connect('mongodb://localhost:27017/user-management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.urlencoded())
app.use(express.json())

routes(app)

app.listen(3000, () => {
    console.log(`App is running on 3000`);
})
