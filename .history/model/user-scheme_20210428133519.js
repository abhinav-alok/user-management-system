import mongoose from "mongoose"
import { StringDecoder } from "node:string_decoder"

const UserSchema = new mongoose.Schema({
    name: {
        type: String
    },
    mobile: {
        type: String
    },
    
})