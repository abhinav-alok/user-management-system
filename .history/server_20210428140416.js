import express from "express" 
import mongoose from "mongoose"


mongoose.connect('mongodb://localhost:27017/user-management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.use(express.urlencoded())
app.use(express.json())

app.post('/api/register', (req, res) => {

})

app.listen(3000, () => {
    console.log(`App is running on 3000`);
})
console.log();