import express from "express";
import { register } from "./authController.js"

const authRouter = express.Router();

authRouter
    .post('/register', register)
    // .post('/login', login())

    
    
export default authRouter