import bcrypt from "bcryptjs"
import { userModel } from "../users/user-model.js"


export const registerUser = async (mobile, password) => {
    
    //Added layer of security to make the password more secure
    // Adds a random generated string to the round's
    // const salt = this.generateSalt()
    console.log(mobile, password, "=====")
    const user = await userModel.findOne({mobile})
    if(user){
        throw `A user with mobile ${mobile} already exist. Please use a different mobile number.`;
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    console.log(mobile, password, hashedPassword)

    const newUser = {
        mobile,
        password: hashedPassword
    }
    console.log(newUser)
    userModel.create(newUser)

}