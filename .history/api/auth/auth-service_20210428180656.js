import bcrypt from "bcryptjs"
import { userModel } from "../users/user-model.js"
import jwt from "jsonwebtoken"
import secret from "../../config/secret.js"


const JWT_SECRET = secret


export const registerUser = async (mobile, password) => {

    //Added layer of security to make the password more secure
    // Adds a random generated string to the round's
    // const salt = this.generateSalt()
    const user = await userModel.findOne({ mobile })
    if (user) {
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

    if (!user) {
        return res.json({ status: 'error', error: "Invalid Mobile/Password" })
    }
    if (await bcrypt.compare(password, user.password)) {

        const token = jwt.sign({ d: user._id }, JWT_SECRET)

        return res.json({ status: 'ok', data: token })

    }

    return res.json({ status: 'error', error: "Invalid Mobile/Password" })
}

export const changePassword = async (token, password) => {
    const user = jwt.verify(token, JWT_SECRET)

    if (!user) {
        return res.json({ status: 'error', error: 'No user found' })
    }

    const _id = user._id,
    const hashedPassword = await bcrypt.hash(password, 10)

    await userModel.findByIdAndUpdate({
        _id,
        $set: {
            password: hashedPassword
        }

    }, { new: true })
}