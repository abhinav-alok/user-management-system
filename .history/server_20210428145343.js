import express from "express" 
import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import router from "./routes/router.js"


mongoose.connect('mongodb://localhost:27017/user-management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.user(router)
// app.post('/api/register', async (req, res) => {
//     const {mobile, password } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 15)
//     console.log(password, mobile, hashedPassword)
// })

app.listen(3000, () => {
    console.log(`App is running on 3000`);
})
console.log();