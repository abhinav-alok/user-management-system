import express from "express";
import { register } from "./auth-controller"

const authRouter = express.Router();

authRouter
    .post('/register', register)
    // .post('/login', login())

    
    
export default authRouter