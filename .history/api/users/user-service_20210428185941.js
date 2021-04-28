import { userModel } from "./user-model.js"

export const listAllUsers = () => {
    return userModel.find()
}

export updateUserById = (user) => {
    return userModel.findByIdAndUpdate(user._id, user, { new: true })
}