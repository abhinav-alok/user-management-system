import express from "express" 
import bodyParser from "body-parser"
import mongoose from "mongoose"


mongoose.connect('mongodb://localhost:27017/user-management',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const app = express()

app.listen(3000, () => {
    console.log(`App is running on 3000`);
})
console.log();