import bcrypt from "bcryptjs"
import { userModel } from "../users/user-model.js"
import jwt from "jsonwebtoken"


export const registerUser = async (mobile, password) => {
    
    //Added layer of security to make the password more secure
    // Adds a random generated string to the round's
    // const salt = this.generateSalt()
    const user = await userModel.findOne({mobile})
    if(user){
        throw `A user with mobile ${mobile} already exist. Please use a different mobile number.`;
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser = {
        mobile,
        password: hashedPassword
    }
    return userModel.create(newUser)

}


export const loginUser = async (mobile, password) => {
    const user = await userModel.findOne({ mobile }).lean()

    if(!user){
        return res.json({status: 'error', error: "Invalid Mobile/Password"})
    }
    if(await bcrypt.compare(password, user.password)){

        const token = jwt.sign({
            id: user._id,
            name: user.name
        })

    }

    res.json({status: 'error', error: "Invalid Mobile/Password"})
}