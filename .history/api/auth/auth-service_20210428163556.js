import bcrypt from "bcryptjs"
import { userModel } from "../users/user-model.js"


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